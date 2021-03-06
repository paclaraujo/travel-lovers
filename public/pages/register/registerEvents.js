import { registerNewUser } from './registerFunctions.js';
import { showErrorMessage } from '../../utils/error.js';

const user = (registerContainer) => {
  return {
    name: registerContainer.querySelector('#name').value,
    email: registerContainer.querySelector('#email').value,
    password: registerContainer.querySelector('#password').value
  }
}

export const addRegisterEvent = (registerContainer) => {
  const registerBtn =  registerContainer.querySelector('#register-btn');

  registerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    registerNewUser(user(registerContainer), showErrorMessage)
  })
}
