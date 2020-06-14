export const getUser = () => {
  const { uid, displayName } = firebase.auth().currentUser;
  return {
    user_uid: uid,
    name: displayName
  }
}

export const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => (location.hash = 'login'))
    .catch(error => (error));
}

export const dateFormat = () => {
  const options = {year: 'numeric', month: "long", day: "numeric", hour: 'numeric', minute: "numeric"};
  return new Intl.DateTimeFormat('en', options).format(new Date())
} 

export const addPostDb = (post) => {
  firebase
    .firestore()
    .collection("posts")
    .doc()
    .set({
      ...post,
      ...getUser(),
      likes: 0,
      comments: [],
      timestamp: new Date().getTime(),
      date: dateFormat()
    }
  )
}


