import { routes }  from './utils/routes.js';
import { initDb } from './utils/commonScripts.js';

const container = document.querySelector('#root');

const validateHash = hash => hash === '' ? 'login' : hash.replace('#', '');

const validateLoggedUser = () => (
  firebase
    .auth()
    .onAuthStateChanged(user => (
      user ? renderPage('logged', user.displayName) : renderPage('unlogged')
    )
  )
);

const renderPage = (status, name) => {
  const page = validateHash(window.location.hash);
  container.innerHTML = '';
  if (status === "logged" || (status === "unlogged" && page !== 'feed')){
    container.appendChild(routes[page](name));
    if (page === 'feed') {
      initDb();
    }
  } else {
    location.hash = 'login';
    container.appendChild(routes.login);
  }
};

const init = () => window.addEventListener('hashchange', validateLoggedUser);

window.addEventListener('load', () => {
  validateLoggedUser();
  init();
});
