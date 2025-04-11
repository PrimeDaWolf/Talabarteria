const solicitarServicioBtn = document.getElementById('solicitarServicio');

// Agregar un evento al botón

solicitarServicioBtn.addEventListener('click', () => {
    window.location.href = '../HTML/paginaSolicitud.html'; // Redirigir a un formulario
});

// Validar un formulario
function validarFormulario() {
    const nombreProducto = document.getElementById('nombreProducto').value.trim();
    const cantidadProducto = document.getElementById('cantidadProducto').value.trim();
    const nombreCliente = document.getElementById('nombreCliente').value.trim();
    const telefonoCliente = document.getElementById('telefonoCliente').value.trim();
    const direccionCliente = document.getElementById('direccionCliente').value.trim();

    // Validar que todos los campos estén llenos
    if (
        nombreProducto === '' ||
        cantidadProducto === '' ||
        nombreCliente === '' ||
        telefonoCliente === '' ||
        direccionCliente === ''
    ) {
        errorMessage.textContent = "Por favor completa todos los campos.";
        errorMessage.style.display = "block";
        return false;
    }

    // Validar que la cantidad sea un número positivo
    if (isNaN(cantidadProducto) || parseInt(cantidadProducto) <= 0) {
        errorMessage.textContent = "Por favor ingresa una cantidad válida (número positivo).";
        return false;
    }

    // Validar que el teléfono sea un número válido
    if (isNaN(telefonoCliente) || telefonoCliente.length < 10) {
        errorMessage.textContent = "Por favor ingresa un numero de teléfono válido (mínimo 10 dígitos).";
        return false;
    }

    errorMessage.textContent = "Formulado enviado correctamente.";
    return true;
}