<!-- === JavaScript === -->
<script>
  // Inicia cuando la página carga
  document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los botones
    const buttons = document.querySelectorAll('.custom-button');

    buttons.forEach(button => {
      let countdown = 15; // Temporizador de 15 segundos
      let isFirstClick = true; // Controla el primer clic
      const adLink = button.getAttribute('data-ad-link'); // Enlace publicitario
      const finalLink = button.getAttribute('data-final-link'); // Enlace final

      // Acción al hacer clic
      button.addEventListener('click', function() {
        if (isFirstClick && adLink) {
          button.disabled = true; // Desactiva el botón
          window.open(adLink, '_blank'); // Abre el enlace publicitario
          isFirstClick = false;

          // Temporizador
          const timer = setInterval(function() {
            countdown--;
            button.innerHTML = `<i class="fas fa-clock"></i> Espera ${countdown}s`;
            if (countdown <= 0) {
              clearInterval(timer); // Detiene el temporizador
              button.innerHTML = `<i class="fas fa-lock-open"></i> Ir al link`;
              button.disabled = false; // Reactiva el botón
            }
          }, 1000);
        } else if (!button.disabled && finalLink) {
          window.open(finalLink, '_blank'); // Abre el enlace final
        }
      });
    });
  });
</script>
