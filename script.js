// REDIRECIONAMENTO - EXECUTA PRIMEIRO
(function redirectToHTTPS() {
  var host = window.location.hostname;
  var protocol = window.location.protocol;
  
  // Verifica se precisa redirecionar
  if (host !== 'www.clinicavalliori.com.br' || protocol !== 'https:') {
    var newURL = 'https://www.clinicavalliori.com.br' + 
                 window.location.pathname + 
                 window.location.search + 
                 window.location.hash;
    
    // Redireciona imediatamente
    window.location.replace(newURL);
  }
})();

// ANIMAÇÃO - SÓ EXECUTA SE NÃO REDIRECIONAR
document.addEventListener("DOMContentLoaded", () => {
  // Verifica novamente (segurança)
  if (window.location.hostname === 'www.clinicavalliori.com.br' && 
      window.location.protocol === 'https:') {
    
    const items = document.querySelectorAll(".perfil, .buttons");

    items.forEach((el, i) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(10px)";

      setTimeout(() => {
        el.style.transition = "all .5s ease";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }, 150 + i * 150);
    });
  }
});
