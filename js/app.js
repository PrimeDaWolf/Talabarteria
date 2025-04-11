
document.addEventListener("DOMContentLoaded", function () {
    // Función para cambiar de pantalla
    function changeScreen(screenId) {
        const screens = document.querySelectorAll(".screen");
        screens.forEach(screen => {
            screen.style.display = "none";
        });
        document.getElementById(screenId).style.display = "block";
    }

    //Cambiar a la pantalla de inicio
    document.getElementById("home-button").addEventListener("click", function () {
        changeScreen("home-screen");
    });

    //Cambiar a la pantalla de login
    document.getElementById("login-button").addEventListener("click", function () {
        changeScreen("login-screen");
    });

    //Cambiar a la pantalla de confirmación de pedido
    document.getElementById("order-confirmation-button").addEventListener("click", function () {
        changeScreen("order-confirmation-screen");
    });

    //Cambiar a la pantalla de la tienda
    document.getElementById("store-button").addEventListener("click", function () {
        changeScreen("store-screen");
    });

    //Cambiar a la pantalla de realizar pedido
    document.getElementById("place-order-button").addEventListener("click", function () {
        changeScreen("place-order-screen");
    });

    // Ejemplo de función para manejar el envío de formularios
    function handleFormSubmit(formId) {
        const form = document.getElementById(formId);
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            // Aquí puedes manejar el envío del formulario y la interconexión con el backend
            alert("Formulario enviado: " + formId);
        });
    }

    // Manejo del envío de formularios
    handleFormSubmit("login-form");
    handleFormSubmit("order-form");

    // Inicializar la pantalla de inicio
    changeScreen("home-screen");
});
