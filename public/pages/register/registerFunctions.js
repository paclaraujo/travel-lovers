import { addUserDoc } from '../../utils/commonScripts.js';

export const registerNewUser = ({ name, email, password }, callback) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      setDisplayName(name)
        addUserDoc(response.user)
        location.hash = '#feed';
    })
    .catch(error => callback(error.code, 'register'))
}

export const setDisplayName = (name) => (
  firebase.auth().currentUser.updateProfile({
    displayName: name
  })
)