document.addEventListener("DOMContentLoaded", () => {
  const date = document.getElementById("date");
  const menu = document.getElementById("menu");
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const dayNght = document.getElementById("dayNght");

  function showDate() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1; // Ajustar el mes
    const year = now.getFullYear();
    date.textContent = `${day}/${month}/${year}`;
  }

  function toggleDarkMode() {
    const isSun = dayNght.getAttribute("src") === "assets/sun.svg";
    dayNght.src = isSun ? "assets/moon.svg" : "assets/sun.svg";
    document.body.classList.toggle("dark");
    header.classList.toggle("dark");
    nav.classList.toggle("dark");
    nav.classList.toggle("open");
  }

  function toggleMenu() {
    nav.classList.toggle("open");
  }

  // Validación por si algún elemento falta
  if (date && menu && header && nav && dayNght) {
    showDate();
    dayNght.addEventListener("click", toggleDarkMode);
    menu.addEventListener("click", toggleMenu);
  } else {
    console.error("Algunos elementos no fueron encontrados en el DOM.");
  }
});
