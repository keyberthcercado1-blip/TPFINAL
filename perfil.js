

document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logoutBtn');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            
            localStorage.removeItem('authToken');

            
            window.location.href = '/';
        });
    }
});