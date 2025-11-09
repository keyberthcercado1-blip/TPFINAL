

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login-form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); 

        const userData = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
        };

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                
                localStorage.setItem('authToken', data.token);
                
                
                window.location.href = `/perfil/${data.role}`; 
            } else {
                alert(`Error de acceso: ${data.message || 'Credenciales incorrectas.'}`);
            }

        } catch (error) {
            console.error('Error de conexión:', error);
            alert('Error: No se pudo conectar con el servidor.');
        }
    });
});