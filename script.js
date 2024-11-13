const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please enter both username and password.';
        return;
    }

    // Simulate API call (replace with actual API call)
    const fakeApiResponse = {
        success: true,
        message: 'Login successful!',
    };

    if (fakeApiResponse.success) {
        // Login successful, redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = fakeApiResponse.message;
    }
});

