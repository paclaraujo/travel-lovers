import { getUser } from '../feedFunctions.js';
import { addEvents } from './postsEvents.js';
import { commentTemplate } from '../comment/commentView.js'

const ownerPostsBtns = (post) => {
  return `
    <button class='action-btn far fa-edit' data-edit='${post.id}'></button>
    <button class='hidden action-btn far fa-save' data-save='${post.id}'></button>
    <button class='mg action-btn far fa-trash-alt' data-delete='${post.id}'></button>
  `;
}

export const postTemplate = (post) => {
  const postLi = document.createElement('li');
  let isOwner = post.user_uid === getUser().user_uid;

  postLi.innerHTML = `
    <div class='post-container container-shadow'>
      <header class='profile-container'>
        <div class='profile-info division'>
          <img class='profile-img' src='../../../assets/icon.png'>
          <div>
            <p class='user-name'>${post.name}</p>
            <p class='post-privacy'>${post.privacy} post | ${post.date}</p>
          </div>
        </div>
      </header>
      <article class='post-text' id='post-${post.id}'>${post.text}</article>
      <div class='post-actions division'> 
        <div class='likes-container'>
          <button class='action-btn like far fa-heart' data-like='${post.id}'></button>
          <p class='posts-likes' id='likes'>${post.likes} likes</p>
        </div>
        <div>
          ${ isOwner ? ownerPostsBtns(post) : ''}
        </div>
      </div>
      <div class='comment-container'>
        <textarea class='comments-textarea container-shadow' placeholder='Comment' id='comments-input'></textarea>
        <button class='action-btn far fa-paper-plane' data-comment='${post.id}'></button>
      </div>
      <ul id='comments'>
        ${post.comments.length > 0 ? post.comments.reverse().map(comment => commentTemplate(comment, post.id)).join(''): ''}
      <ul>
    </div>
  `;

  addEvents(postLi, post.id, isOwner);

  return postLi;
}

