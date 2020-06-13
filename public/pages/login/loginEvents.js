import { loginWithEmailAndPassword , loginWithGoogle } from './loginFunctions.js';
import { showErrorMessage } from '../../utils/commonScripts.js';

const eventsParams = (loginContainer) => {
  return {
    email: loginContainer.querySelector('#email').value,
    password: loginContainer.querySelector('#password').value
  }
}

const loginEvent = (loginContainer) => {
  const loginBtn = loginContainer.querySelector('#login-btn');

  loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    loginWithEmailAndPassword(eventsParams(loginContainer), showErrorMessage)
  })
}

const googleLoginEvent = (loginContainer) => {
  const googleBtn = loginContainer.querySelector('#login-google');

  googleBtn.addEventListener('click', (event) => {
    event.preventDefault();
    loginWithGoogle(showErrorMessage);
  })
}

export const addEvents = (loginContainer) => {
  loginEvent(loginContainer);
  googleLoginEvent(loginContainer);
}

