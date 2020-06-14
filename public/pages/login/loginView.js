import { addEvents } from './loginEvents.js';

export const loginTemplate = () => {
  const loginContainer = document.createElement('div');
  
  loginContainer.innerHTML = `
    <main class='login-container'>
      <div class='login'>
        <div class='bg-white login-box container-shadow'>
          <h1 class='title'>TraveLovers</h1>
          <form class='login-form'>
            <label for='email'>Email:</label>
            <input class='login-input' placeholder='example@example.com' id='email' type='email'>
            <label for='password'>Password:</label>
            <input class='login-input' placeholder='***********' id='password' type='password'>
            <span class='error' id='error-message'></span>
          </form>
          <div class='btn-box'>
            <button class='btn container-shadow' id='login-btn'>Login</button>
            <p class='text'>Log in with google</p>
            <button class='google-btn fab fa-google' id='login-google'></button>
            <p class='text'>Don't have an account? <a class='register-anchor' href='#register'>Register</a></p>
          </div>
        </div>
      </div>
    </main>
  `;

  addEvents(loginContainer);

  return loginContainer;
};
