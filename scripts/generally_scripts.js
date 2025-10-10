const btnMenu = document.getElementById("burgerMenu");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav ul li a");

links.forEach((link) => {
  link.addEventListener("click", activeMenu);
});

btnMenu.addEventListener("click", activeMenu);

/* FUNCIONES */

/* Esta función activa el menu de navegación en dispositivos móviles */
function activeMenu() {
  nav.classList.toggle("active");
}
