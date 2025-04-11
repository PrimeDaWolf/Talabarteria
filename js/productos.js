// Seleccionar todos los botones "Comprar"
const botonesComprar = document.querySelectorAll('.btn-comprar');

// Seleccionar elementos de la ventana modal
const modalProducto = document.getElementById('modalProducto');
const productoAgregado = document.getElementById('productoAgregado');
const cerrarModalBtn = document.getElementById('cerrarModal');

// Agregar evento a cada botón
botonesComprar.forEach((boton) => {
    boton.addEventListener('click', () => {
        const producto = boton.getAttribute('data-product');

        // Obtener el carrito actual del localStorage
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        // Agregar el producto al carrito
        carrito.push(producto);

        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Mostrar el producto agregado en la ventana modal
        productoAgregado.textContent = `Has agregado: ${producto}`;
        modalProducto.classList.add('show');
    });
});

// Evento para cerrar la ventana modal
cerrarModalBtn.addEventListener('click', () => {
    modalProducto.classList.remove('show');
});