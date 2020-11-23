import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { take } from 'rxjs/operators';
import { UserData } from 'src/app/interfaces/user-data';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { DeleteUserDialogComponent } from '../../delete-user-dialog/delete-user-dialog.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  readonly titleMaxLength = 30;
  readonly messageMaxLength = 500;
  readonly nameMaxLength = 20;
  readonly swiperConfig: SwiperConfigInterface = {
    loop: true,
    observer: true,
    navigation: true,
    pagination: {
      el: '.settings__swiper-pager',
      clickable: true,
    },
    centeredSlides: true,
    slidesPerView: 3,
  };
  readonly characterIds = [...Array(51).map((_, i) => i + 1)];

  processing = false;
  selectedCharacterId = 0;

  form = this.fb.group({
    title: [
      '',
      [Validators.required, Validators.maxLength(this.titleMaxLength)],
    ],
    message: [
      '',
      [Validators.required, Validators.maxLength(this.messageMaxLength)],
    ],
    name: ['', [Validators.required, Validators.maxLength(this.nameMaxLength)]],
    status: ['', [Validators.required, Validators.pattern(/leaved|playing/)]],
    joinedDate: ['', [Validators.required]],
    leavedDate: [''],
    isPublic: [false],
  });
  imageFile: string;
  oldImageUrl: string;
  userCharacterId: number;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.authService.user$
      .pipe(take(1))
      .toPromise()
      .then((user: UserData) => {
        this.oldImageUrl = user.avatarURL;
        this.form.patchValue({
          name: user.name || '',
          title: user.title || '',
          message: user.message || '',
          status: user.status || '',
          joinedDate: user.joinedDate ? user.joinedDate.toDate() : '',
          leavedDate: user.leavedDate ? user.leavedDate.toDate() : '',
          isPublic: user.isPublic || false,
        });
        this.selectedCharacterId = user.characterId ? user.characterId - 1 : 0;
        this.userCharacterId = user.characterId - 1;
      });
  }

  async updateUser() {
    const uid: string = this.authService.uid;
    const formData = {
      ...this.form.value,
      characterId: this.selectedCharacterId + 1,
    };
    if (this.imageFile !== undefined) {
      const value: UserData = {
        ...formData,
        avatarURL: this.imageFile,
      };
      await this.userService
        .setImageToStorage(uid, this.imageFile)
        .then((url) => {
          this.imageFile = url;
        });
      this.userService.updateUser(value, uid).then(() => {
        this.processing = false;
      });
    } else {
      this.userService.updateUser(formData, uid).then(() => {
        this.processing = false;
      });
    }
    this.processing = true;
  }

  openDeleteUserDialog() {
    this.dialog.open(DeleteUserDialogComponent, {
      width: '400px',
      autoFocus: false,
      restoreFocus: false,
    });
  }

  onCroppedImage(image: string) {
    this.imageFile = image;
  }

  toggleBtnText(isPublic: boolean, pristine: boolean): string {
    if (isPublic && pristine) {
      return 'メッセージ公開中';
    } else if (isPublic && !pristine) {
      return 'メッセージを公開する';
    } else {
      return '非公開にして保存する';
    }
  }
}
