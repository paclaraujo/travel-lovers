import { getUser } from '../feedFunctions.js';

const ownerCommentsBtns = (isOwner, comment, postId) => {
  return `
    <button class='mg action-btn far fa-trash-alt' data-isOwner='${isOwner}' data-postid='${postId}' data-commentid='${comment.id}'></button>
  `;

  // <button class='hidden action-btn far fa-save' data-save='${comment.id}'></button>
  // <button class='action-btn far fa-edit' data-edit='${comment.id}'></button>
}


export const commentTemplate = (comment, postId) => {
  let isOwner = comment.user_uid === getUser().user_uid;

  return `
    <div class='profile-info'>
      <div>
        <p class='user-name'>${comment.name} <span class='post-privacy'>${comment.date}</span></p>
        <p class='post-privacy'>${comment.text}</p>
      </div>
      <div>
          ${isOwner ? ownerCommentsBtns(isOwner, comment, postId) : ''}
        </div>
    </div>
  `;
}