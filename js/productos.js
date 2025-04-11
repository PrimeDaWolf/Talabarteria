const botonesComprar = document.querySelectorAll('.btn-comprar');

const modalProducto = document.getElementById('modalProducto');
const productoAgregado = document.getElementById('productoAgregado');
const cerrarModalBtn = document.getElementById('cerrarModal');

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

// Cerrar la ventana modal
cerrarModalBtn.addEventListener('click', () => {
    modalProducto.classList.remove('show');
});