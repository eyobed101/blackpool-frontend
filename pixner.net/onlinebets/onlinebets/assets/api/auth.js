import { AuthAPI } from './apiIntegrators.js';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email3').value;
    const password = document.getElementById('password-field').value;
    console.log(email)
    console.log(password)
    try {
      const result = await AuthAPI.login({ email, password });

      // Save the authToken in localStorage upon successful login
      localStorage.setItem('authToken', result);

      // Optionally, perform actions after successful login (e.g., hide modal, update UI)
      // Example: Close the login modal after successful login
      const loginModal = document.getElementById('exampleModal');
      const bootstrapModal = new bootstrap.Modal(loginModal);
      bootstrapModal.hide();

      // Redirect to another page, update UI, etc.
      // ...
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login error (e.g., display error message)
    }
  });
});