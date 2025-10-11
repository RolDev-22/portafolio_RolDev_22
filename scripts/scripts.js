const btnMenu = document.getElementById("burgerMenu");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav ul li a");

// Activa el menú al hacer clic
links.forEach((link) => {
  link.addEventListener("click", activeMenu);
});

btnMenu.addEventListener("click", activeMenu);

// Esta función controla la visibilidad del menú dependiendo del tamaño de la pantalla
function activeMenu() {
  if (window.innerWidth < 1024) {
    nav.classList.toggle("active");
  }
}
