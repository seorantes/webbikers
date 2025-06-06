
  // Botón scroll
  const scrollBtn = document.getElementById("scrollTopBtn");
  window.onscroll = () => {
    scrollBtn.style.display = (document.documentElement.scrollTop > 200) ? "block" : "none";
  };
  scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Hora en footer
  function mostrarHora() {
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString();
    document.getElementById("hora").innerText = `Hora actual: ${hora}`;
  }
  mostrarHora();
  setInterval(mostrarHora, 60000);

  // Reproducción automática de música
  function iniciarMusica() {
    const iframe = document.getElementById("iframeMusica");
    iframe.src = "https://www.youtube.com/embed/4AQrH9OCal0?autoplay=1&loop=1&playlist=4AQrH9OCal0&mute=0";
    document.getElementById("videoMusica").style.display = "none";
  }

  window.addEventListener("load", () => {
    setTimeout(() => {
      iniciarMusica(); // intenta cargar automáticamente al inicio
    }, 1000);
  });
