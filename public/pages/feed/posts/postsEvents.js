import { postTemplate } from './postsView.js';
import { getUser } from '../feedFunctions.js';
import { likePost, deletePost, edit, addComment , deleteComment } from './postsFunctions.js';

export const printPosts = (posts) => {
  const postsContainer = document.querySelector('#published-posts');
  postsContainer.innerHTML = '';

  posts.map((post) => postsContainer.appendChild(postTemplate(post)))
}

const deleteEvent = (postContainer, postId) => {
  const deleteBtn = postContainer.querySelector(`button[data-delete=${postId}]`);

  deleteBtn.addEventListener('click', () => {
    deletePost(postId);
  })
}

const editEvent = (postContainer, postId) => {
  const editBtn = postContainer.querySelector(`button[data-edit=${postId}]`);
  const saveBtn = postContainer.querySelector(`button[data-save=${postId}]`);
  const post = postContainer.querySelector(`#post-${postId}`);

  editBtn.addEventListener('click', () => {
    post.setAttribute('contenteditable', 'true');
    post.focus();
    editBtn.classList.add('hidden');
    saveBtn.classList.remove('hidden');
  })

  saveEvent(editBtn, saveBtn, post, postId)
}

const saveEvent = (editBtn, saveBtn, post, postId) => {
  saveBtn.addEventListener('click', () => {
    saveBtn.classList.add('hidden');
    editBtn.classList.remove('hidden');
    edit(postId, {text: post.textContent})
  })
}

const likeEvent = (postContainer, postId) => {
  const likeBtn = postContainer.querySelector(`button[data-like=${postId}]`);

  likeBtn.addEventListener('click', () => {
    likePost(postId);
  })
}

const commentEvent = (postContainer, postId) => {
  const commentBtn = postContainer.querySelector(`button[data-comment=${postId}]`);
  
  commentBtn.addEventListener('click', () => {
    const comment = postContainer.querySelector('#comments-input').value;
    addComment(postId, comment, getUser())
  })
}

const commentDeleteEvent = (postContainer, postId) => {
  const commentDeleteBtn = postContainer.querySelector(`button[data-isOwner=true]`);

  if(commentDeleteBtn){
    commentDeleteBtn.addEventListener('click', () => {
      deleteComment(commentDeleteBtn.dataset.commentid, postId)
    })
  }
}

export const addEvents = (postContainer, postId, isOwner) => {
  likeEvent(postContainer, postId);
  commentEvent(postContainer, postId);
  commentDeleteEvent(postContainer, postId)

  if (isOwner) {
    deleteEvent(postContainer, postId);
    editEvent(postContainer, postId);
  }
}