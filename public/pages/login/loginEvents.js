import { loginWithEmailAndPassword , loginWithGoogle } from './loginFunctions.js';
import { errorMessages } from '../../utils/error.js';

const showErrorMessage = (error) => {
  const errorMessage = document.querySelector('#error-message');
  errorMessage.textContent = errorMessages.auth[error]; 
}

const loginEvent = (btn, email, password) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    loginWithEmailAndPassword(email.value, password.value, showErrorMessage)
  })
}

const googleLoginEvent = (btn) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    loginWithGoogle(showErrorMessage);
  })
}

export const addEvents = (loginContainer) => {
  const email = loginContainer.querySelector('#email'); 
  const password = loginContainer.querySelector('#password'); 
  const loginBtn = loginContainer.querySelector('#login-btn'); 
  const googleBtn = loginContainer.querySelector('#login-google');
  
  loginEvent(loginBtn, email, password);
  googleLoginEvent(googleBtn);
}

