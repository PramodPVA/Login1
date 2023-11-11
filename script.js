function validateForm(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username.length < 8) {
      alert('Username should be at least 8 characters');
      return;
    }
  
    if (password.length < 6) {
      alert('Password should be at least 6 characters');
      return;
    }
  
    alert('Login successful!');
  }