import { errorMessages } from './error.js';

export const showErrorMessage = (error, type) => {
  const errorMessage = document.querySelector('#error-message');
  errorMessage.textContent = errorMessages[type][error]; 
}

export const addUserDoc = (user) => {
  firebase
    .firestore()
    .collection('users')
    .doc(user.uid).get().then((doc) => {
      if (!doc.exists) {
        firebase.firestore().collection('users').doc(user.uid).set({
          name: user.displayName,
          email: user.email,
          uid: user.uid
        });
      };
    })
};