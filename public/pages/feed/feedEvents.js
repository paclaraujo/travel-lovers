import { logout, addPostDb } from './feedFunctions.js';
import { showErrorMessage } from '../../utils/error.js';

const logoutEvent = (feedContainer) => {
  const logoutBtn = feedContainer.querySelector('#logout');

  logoutBtn.addEventListener('click', () => {
    logout(showErrorMessage);
  });
}

const postPrivacy = (feedContainer) => {
  const privacyCheckbox = feedContainer.querySelector('#privacy-checkbox');

  return privacyCheckbox.checked ? 'Private' : 'Public';
}

const post = (feedContainer) => {
  return {
    text: feedContainer.querySelector('#post-input').value,
    privacy: postPrivacy(feedContainer)
  }
}


const addPostEvent = (feedContainer) => {
  const sendPostBtn = feedContainer.querySelector('#send-post-btn');
  
  sendPostBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addPostDb(post(feedContainer));
  });
}

export const addEvents = (feedContainer) => {
  logoutEvent(feedContainer)
  addPostEvent(feedContainer)
}
