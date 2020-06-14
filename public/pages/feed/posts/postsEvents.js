import { postTemplate } from './postsView.js';

export const printPosts = (posts) => {
  const postsContainer = document.querySelector('#published-posts');
  postsContainer.innerHTML = '';

  posts.map((post) => postsContainer.appendChild(postTemplate(post)))
}