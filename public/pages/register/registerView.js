export const registerTemplate = () => {
  const registerContainer = document.createElement('div');

  registerContainer.innerHTML = `
    <main class='register-container'>
      <div class='register'>
        <div class='bg-white register-box container-shadow'>
          <h1 class='title'>TraveLovers</h1>
          <form class='register-form'>
            <label for='name'>Name:</label>
            <input class='register-input' placeholder='Your name here' id='name' type='text'>
            <label for='email'>Email:</label>
            <input class='register-input' placeholder='example@example.com' id='email' type='email'>
            <label for='password'>Password:</label>
            <input class='register-input' placeholder='***********' id='password' type='password'>
            <span class='error' id='error-message'></span>
          </form>
          <div class='btn-box'>
            <button class='register-btn btn container-shadow' id='register-btn'>Register</button>
            <p class='text'>Back to <a class='login-anchor' href='#login'>Login</a></p>
          </div>
        </div>
      </div>
    </main>
  `;


  return registerContainer;
};
