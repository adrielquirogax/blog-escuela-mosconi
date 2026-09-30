// 1. Seleccionamos los elementos del HTML por su ID o etiqueta
const botonModo = document.getElementById('btn-modo');
const cuerpoPagina = document.body;

// 2. Escuchamos el evento de "click" en el botón
botonModo.addEventListener('click', function() {
    // Alternamos la clase "modo-oscuro" en el body
    cuerpoPagina.classList.toggle('modo-oscuro');

    // Cambiamos el texto del botón según el modo activo
    if (cuerpoPagina.classList.contains('modo-oscuro')) {
        botonModo.textContent = '☀️ Modo Claro';
    } else {
        botonModo.textContent = '🌙 Modo Oscuro';
    }
});
// --- VALIDACIÓN DE FORMULARIO ---

const formulario = document.getElementById('mi-formulario');
const mensajeEstado = document.getElementById('mensaje-estado');

if (formulario) {
    formulario.addEventListener('submit', function(event) {
        // Detiene el comportamiento por defecto de recargar la página
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (nombre === '' || email === '' || mensaje === '') {
            mensajeEstado.textContent = '❌ Por favor, completa todos los campos.';
            mensajeEstado.style.color = '#ff4d4d';
        } else {
            mensajeEstado.textContent = '✅ ¡Gracias por comunicarte! Tu mensaje ha sido enviado a la Escuela Mosconi.';
            mensajeEstado.style.color = '#4CAF50';
            
            // Resetea todos los campos del formulario
            formulario.reset();
        }
    });
}