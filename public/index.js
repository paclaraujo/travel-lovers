import { login } from './pages/login/main.js';

window.addEventListener('load', () => {
  document.querySelector('#root').appendChild(login())
});
