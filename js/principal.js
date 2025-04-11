const solicitarServicioBtn = document.getElementById('solicitarServicio');
const verProductosBtn = document.getElementById('verProductos');
const loginButton = document.getElementById("loginButton");


// Agregar un evento al botón
solicitarServicioBtn.addEventListener('click', () => {
        window.location.href = 'HTML/paginaSolicitud.html'; // Redirigir a un formulario
});
verProductosBtn.addEventListener('click', () => {
        window.location.href = 'HTML/paginaProductos.html'; // Redirigir a la página de productos
});
loginButton.addEventListener('click', () => {
    // Verificar si hay un usuario activo en localStorage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
        // Si hay un usuario activo, redirigir a la página de perfil
        window.location.href = "HTML/paginaPerfil.html";
    } else {
        // Si no hay usuario activo, redirigir a la página de inicio de sesión
        window.location.href = "HTML/index.html";
    }
});

// Validar un formulario
function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    

    if (nombre.trim() === '' || email.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return false;
    }

    if (!email.includes('@')) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false;
    }

    window.location.href = 'HTML/paginaPrincipal.html';

    alert('Formulario enviado correctamente.');
    return true;
}