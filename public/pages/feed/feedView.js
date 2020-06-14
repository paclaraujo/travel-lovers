import { addEvents } from './feedEvents.js'; 

export const feedTemplate = (user) => {
  const feedContainer = document.createElement('main');
  feedContainer.classList.add('feed-container');

  feedContainer.innerHTML = `
    <div>
      <nav class='navbar'>
        <ul class='navbar-ul'>
          <li>
            <button class='navbar-btn' id='profile'><i class='navbar-icon far fa-user-circle'></i>Profile</button>
          </li>
          <li>
            <button class='navbar-btn' id='logout'>Logout</button>
          </li>
        </ul>
      </nav>
      <div class='container'>
        <div class='profile-container container-shadow'>
          <div class='profile-info'>
            <img class='profile-img' src='../../assets/icon.png'>
            <div>
              <p class='user-name'>${user}</p>
              <p class='user-description'>Backpacker | Travelover à 1 ano </p>
            </div>
          </div>
        </div>
        <div>
          <form class='feed-form container-shadow'>
            <textarea class='post-textarea container-shadow' placeholder='What are you doing?' id='post-input'></textarea>
            <div class='posts-options'>
              <div>
                <input id='privacy-checkbox' type='checkbox'>
                <label class='privacy-checkbox-label' for='private-post'>Private</label>
              </div>
              <button class='feed-btn container-shadow' id='send-post-btn'>Post</button>
            </div>
          </form>
          <ul id='published-posts'></ul>
        </div>
      </div>
    </div>
    <footer> Developed by @paclaraujo</footer>
  `;

  addEvents(feedContainer);
  
  return feedContainer;
}
