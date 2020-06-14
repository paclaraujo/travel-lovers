import { addUserDoc } from '../../utils/commonScripts.js';

export const registerNewUser = ({ name, email, password }, callback) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      const updatedUser = {
        ...user,
        displayName: name
      }
      setDisplayName(name)
      addUserDoc(updatedUser);
    })
    .catch(error => callback(error))
}

export const setDisplayName = (name) => (
  firebase.auth().currentUser.updateProfile({
    displayName: name
  })
)