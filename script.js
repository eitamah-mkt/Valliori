// ANIMAÇÃO E IDIOMAS
document.addEventListener("DOMContentLoaded", () => {
  // ANIMAÇÃO DOS ELEMENTOS
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

  // FUNCIONALIDADE DE IDIOMAS
  const langButtons = document.querySelectorAll('.lang-btn');
  const translations = {
    pt: {
      title: "Valliori Odontologia",
      tagline: "Estética • Saúde • Bem-estar",
      whatsapp: "Agendar pelo WhatsApp",
      location: "Ver localização",
      review: "Avaliar no Google"
    },
    en: {
      title: "Valliori Dentistry",
      tagline: "Aesthetics • Health • Well-being",
      whatsapp: "Schedule via WhatsApp",
      location: "View location",
      review: "Review on Google"
    },
    es: {
      title: "Valliori Odontología",
      tagline: "Estética • Salud • Bienestar",
      whatsapp: "Agendar por WhatsApp",
      location: "Ver ubicación",
      review: "Evaluar en Google"
    }
  };

  // Função para alterar idioma
  function changeLanguage(lang) {
    // Atualiza textos
    document.querySelector('.perfil h1').textContent = translations[lang].title;
    document.querySelector('.perfil span').textContent = translations[lang].tagline;
    
    const buttons = document.querySelectorAll('.btn');
    buttons[0].textContent = translations[lang].whatsapp;
    buttons[1].textContent = translations[lang].location;
    buttons[2].textContent = translations[lang].review;

    // Atualiza botões ativos
    langButtons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      }
    });

    // Salva preferência
    localStorage.setItem('preferredLanguage', lang);
  }

  // Adiciona eventos aos botões
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      changeLanguage(lang);
    });
  });

  // Verifica idioma salvo ou padrão
  const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
  changeLanguage(savedLang);
});
