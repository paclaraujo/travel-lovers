export const showErrorMessage = (error) => {
  const errorMessage = document.querySelector('#error-message');
  errorMessage.textContent = error.message; 
}