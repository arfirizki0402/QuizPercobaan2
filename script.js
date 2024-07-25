document.getElementById('username-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('username-form').style.display = 'none';
    document.getElementById('password-form').style.display = 'block';
});