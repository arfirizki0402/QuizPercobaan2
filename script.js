const allowedCredentials = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" },
    { username: "user4", password: "password4" },
    { username: "user5", password: "password5" },
    { username: "user6", password: "password6" },
    { username: "user7", password: "password7" },
    { username: "user8", password: "password8" },
    { username: "user9", password: "password9" },
    { username: "user10", password: "password10" },
    { username: "user11", password: "password11" }
];

document.getElementById('username-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const usernameInput = document.getElementById('username').value;
    const user = allowedCredentials.find(user => user.username === usernameInput);

    if (user) {
        document.getElementById('username-form').style.display = 'none';
        document.getElementById('password-form').style.display = 'block';
        document.getElementById('password-form').dataset.username = usernameInput;
    } else {
        alert('Username tidak diizinkan.');
    }
});

document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = event.currentTarget.dataset.username;
    const passwordInput = document.getElementById('password').value;
    const user = allowedCredentials.find(user => user.username === username && user.password === passwordInput);

    if (user) {
        alert('Login berhasil! Mulai Quiz.');
        // Redirect or start the quiz here
    } else {
        alert('Password salah.');
    }
});