// Obtener el carrito del localStorage
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Seleccionar la lista del carrito
const listaCarrito = document.getElementById('listaCarrito');

// Mostrar los productos en el carrito

carrito.forEach((producto) => {
    const li = document.createElement('li');
    li.textContent = producto;
    listaCarrito.appendChild(li);
});

// Manejar el botón "Finalizar Compra"

const finalizarCompraBtn = document.getElementById('finalizarCompra');
const modalGracias = document.getElementById('modalGracias');
const cerrarModalBtn = document.getElementById('cerrarModal');
const modalContent = modalGracias.querySelector('.modal-content');

// Evento para finalizar la compra
finalizarCompraBtn.addEventListener('click', () => {
    if (carrito.length === 0) {
        // Si el carrito está vacío, mostrar mensaje en la ventana modal
        modalContent.innerHTML = `
            <h2>Carrito vacío</h2>
            <p>No hay productos en el carrito. Por favor, agrega productos antes de finalizar la compra.</p>
            <button id="cerrarModal">Cerrar</button>
        `;
    } else {
        // Si hay productos, mostrar mensaje de agradecimiento
        modalContent.innerHTML = `
            <h2>¡Gracias por tu compra!</h2>
            <p>Tu pedido ha sido procesado con éxito.</p>
            <button id="cerrarModal">Cerrar</button>
        `;

        // Vaciar el carrito del localStorage
        localStorage.removeItem('carrito');
    }

    // Mostrar la ventana modal
    modalGracias.classList.add('show');

    // Volver a asignar el evento al botón "Cerrar"
    const cerrarModalBtn = document.getElementById('cerrarModal');
    cerrarModalBtn.addEventListener('click', () => {
        modalGracias.classList.remove('show');
        window.location.href = '../HTML/paginaEnvios.html'; // Redirigir a la página de productos
    });
});