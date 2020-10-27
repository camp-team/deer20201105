const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

export { createUser, deleteUser, deleteUserData } from './user.function';
