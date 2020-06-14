import { dateFormat } from '../feedFunctions.js';

export const deletePost = (postId) => (
  firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .delete()
);

export const likePost = (postId) => {
  firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .update({likes: firebase.firestore.FieldValue.increment(1)});
};

export const edit = (postId, infoToUpdate) => {
  firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .update(infoToUpdate);
};

export const addComment = (postId, text, user) => {
  firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .update({comments: firebase.firestore.FieldValue.arrayUnion({text: text, ...user, date: dateFormat(), id: new Date().getTime()})})
};

export const deleteComment = (commentId, postId) => {
  firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .get()
    .then((doc) => {
      const updatedComments = doc.data().comments.filter(comment => +commentId !== comment.id);
      edit(postId, {comments: updatedComments});
    })
} 