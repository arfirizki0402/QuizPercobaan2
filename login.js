document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const allowedUsers = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
        { username: 'user3', password: 'password3' },
        { username: 'user4', password: 'password4' },
        { username: 'user5', password: 'password5' },
        { username: 'user6', password: 'password6' },
        { username: 'user7', password: 'password7' },
        { username: 'user8', password: 'password8' },
        { username: 'user9', password: 'password9' },
        { username: 'user10', password: 'password10' },
        { username: 'user11', password: 'password11' }
    ];

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const user = allowedUsers.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        // Redirect to the quiz page or another page
        window.location.href = 'quiz-essay.html';
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});

// Prevent page from scrolling up when input is focused
document.getElementById('username').addEventListener('focus', function(event) {
    event.preventDefault();
    window.scrollTo(0, 0);
});
document.getElementById('password').addEventListener('focus', function(event) {
    event.preventDefault();
    window.scrollTo(0, 0);
});