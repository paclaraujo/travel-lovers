import { printPosts } from '../pages/feed/posts/postsEvents.js'; 
import { getUser } from '../pages/feed/feedFunctions.js'

export const addUserDoc = (user) => {
  firebase
    .firestore()
    .collection('users')
    .doc(user.uid).get().then((doc) => {
      location.hash = 'feed';
      if (!doc.exists) {
        firebase.firestore().collection('users').doc(user.uid).set({
          name: user.displayName,
          email: user.email,
          uid: user.uid
        });
      };
    })
};

export const initDb = () => {
  firebase.firestore().collection("posts").orderBy('timestamp', 'desc')
    .onSnapshot((querySnapshot) => {
      const { user_uid } = getUser();
      const allPosts = [];
      querySnapshot.forEach(function(doc) {
        if(doc.data().user_uid === user_uid || doc.data().privacy === "Public"){
          allPosts.push({...doc.data(), id: doc.id});
        } 
      });
      printPosts(allPosts);  
    }
  );
}