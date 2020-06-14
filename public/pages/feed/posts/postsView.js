import { getUser } from '../feedFunctions.js';

const ownerPostsBtns = (post) => {
  return `
    <button class='action-btn far fa-edit' data-id='${post.id}' id='edit'></button>
    <button class='hidden action-btn far fa-save' data-id='${post.id}' id='save'></button>
    <button class='mg action-btn far fa-trash-alt' data-id='${post.id}' id='delete'></button>
  `;
}

export const postTemplate = (post) => {
  const postLi = document.createElement('li');

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
          <button class='action-btn like far fa-heart' data-id='${post.id}' id='like'></button>
          <p class='posts-likes' id='likes'>${post.likes} likes</p>
        </div>
        <div>
          ${post.user_uid === getUser().user_uid ? ownerPostsBtns(post) : ''}
        </div>
      </div>
      <div class='comment-container'>
        <textarea class='comments-textarea container-shadow' placeholder='Comment' id='comments-input'></textarea>
        <button class='action-btn far fa-paper-plane' data-id='${post.id}' id='coment'></button>
      </div>
    <div id='coments'>
    ${post.comments.map(coment => `<p>${coment.name}</p><p>${coment.text}</p>`).join('')}
    <div>
  </div>
  `;

  return postLi;
}

