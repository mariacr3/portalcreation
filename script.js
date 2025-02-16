document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validar que los campos no estén vacíos
    if (!name || !email || !message) {
      alert("Por favor, rellena todos los campos.");
      return;
    }

    // Aquí se simula el envío de datos; en producción se haría una petición AJAX a un backend
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
    contactForm.reset();
  });
});
