// No backend authentication for now. Only prevent default form submission and show a toast.

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Redirect to portal selection page
    window.location.href = 'portal.html';
});
