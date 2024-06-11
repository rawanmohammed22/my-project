document.addEventListener('DOMContentLoaded', function() {
    var userName = localStorage.getItem('loggedInUser');
    if (userName) {
        document.getElementById('username').textContent = userName;
    } else {
        document.getElementById('username').textContent = "Guest";
    }
});
