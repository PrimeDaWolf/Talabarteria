// Obtener elementos del DOM
const profileForm = document.getElementById("profileForm");
const logoutButton = document.getElementById("logoutButton");

// Cargar datos del usuario actual
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
    // Redirigir al login si no hay usuario activo
    window.location.href = "/HTML/paginaLogIn.html";
} else {
    // Mostrar los datos del usuario en el formulario
    document.getElementById("profileUsername").value = currentUser.username;
    document.getElementById("profileEmail").value = currentUser.email;
    document.getElementById("profileAddress").value = currentUser.address;
}

// Manejar la edición del perfil
profileForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("profileUsername").value;
    const address = document.getElementById("profileAddress").value;

    // Actualizar los datos del usuario en localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map(user =>
        user.email === currentUser.email ? { ...user, username, address } : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify({ ...currentUser, username, address }));

    alert("Perfil actualizado con éxito.");
});

// Manejar el cierre de sesión
logoutButton.addEventListener("click", function () {
    // Eliminar el usuario actual del localStorage
    localStorage.removeItem("currentUser");

    // Redirigir al login
    window.location.href = "/HTML/index.html";
});