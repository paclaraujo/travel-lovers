import { routes }  from './utils/routes.js';

const container = document.querySelector('#root');

const validateHash = hash => hash === '' ? 'login' : hash.replace('#', '');

const validateLoggedUser = () => (
  firebase
    .auth()
    .onAuthStateChanged(user => (
      user ? renderPage('logged') : renderPage('unlogged')
    )
  )
);

const renderPage = (status) => {
  const page = validateHash(window.location.hash);
  container.innerHTML = '';
  if (status === "logged" || (status === "unlogged" && page !== 'feed')){
    container.appendChild(routes[page]);
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
