const nav = document.querySelector("nav");
const mode = document.getElementById("mode");
const header = document.querySelector("header");
const option = document.querySelectorAll(".option-Menu");
let modeState = document.body.classList.contains("dark");

/* Eventos */
/* Estos eventos sirven para abrir y cerrar el menu recorren la lista de opciones
  y cuando se hace click en una de ellas se llama a la funcion navToggle */
option.forEach((option) => {
  option.addEventListener("click", () => {
    navToggle();
  });
});

/* Este evento sirve para cambiar el modo oscuro, icono y color de fondo */
mode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  header.classList.toggle("darNav");
  nav.classList.toggle("darNav");
  imageMode(modeState);
  navToggle();
});

/* Funciones */

/* Esta funcion sirve para abrir y cerrar el menu */
function navToggle() {
  nav.classList.toggle("active");
}

/* Esta funcion sirve para cambiar el icono del modo oscuro */
function imageMode(condition) {
  mode.src = condition ? "assets/moon.svg" : "assets/sun.svg";
  modeState = !modeState;
}
