document.addEventListener("DOMContentLoaded", () => {
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
});
