// Obtener elementos del DOM
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const showRegisterForm = document.getElementById("showRegisterForm");
const errorMessage = document.getElementById("errorMessage");


// Alternar entre formularios
showRegisterForm.addEventListener("click", () => {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
});

showLoginForm.addEventListener("click", () => {
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
});


// Manejar el registro de usuarios
registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("registerUsername").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const address = document.getElementById("registerAddress").value;

    // Validar si el usuario ya existe
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        errorMessage.textContent = "El correo ya está registrado.";
        errorMessage.style.display = "block";
        return;
    }

    // Guardar el nuevo usuario en localStorage
    users.push({ username, email, password, address });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Usuario registrado con éxito. Ahora puedes iniciar sesión.");
    registerForm.reset();
});

// Inicio de sesión
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // Guardar el usuario actual en localStorage
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "../HTML/paginaPerfil.html"; // Redirigir a la página de perfil
    } else {
        errorMessage.textContent = "Correo o contraseña incorrectos.";
        errorMessage.style.display = "block";
    }
});