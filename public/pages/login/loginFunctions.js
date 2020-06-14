import { addUserDoc } from '../../utils/commonScripts.js';

export const loginWithEmailAndPassword = ({ email, password }, callback) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => location.hash = 'feed')
    .catch((error) => callback(error));
};

export const loginWithGoogle = (callback) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => addUserDoc(result.user))
    .catch((error) => callback(error))
};
