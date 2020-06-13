export const loginWithEmailAndPassword = (email, password, callback) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => location.hash='feed')
    .catch((error) => callback(error.code));
};

const addUserDoc = (user) => {
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

export const loginWithGoogle = (callback) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      location.hash = 'feed';
      addUserDoc(result.user)
    })
    .catch((error) => callback(error.code))
};
