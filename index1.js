// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select the form
    const form = document.getElementById('login-form');

    // Add an event listener for form submission
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get user input
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Basic validation
        if (!username || !password) {
            alert('Please fill in both the username and password.');
            return;
        }

        try {
            // Send login data to the server
            const response = await fetch(form.action, {
                method: form.method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            // Handle server response
            if (response.ok) {
                // Successful login
                alert('Login successful!');
                window.location.href = '/dashboard'; // Redirect to dashboard
            } else {
                // Handle error response
                const errorData = await response.json();
                alert(errorData.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred. Please try again later.');
        }
    });
});