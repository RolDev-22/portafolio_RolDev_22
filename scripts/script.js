const nav = document.querySelector("nav");
const mode = document.getElementById("mode");
const header = document.querySelector("header");
const option = document.querySelectorAll(".option-Menu");

let modeState = document.body.classList.contains("dark");

option.forEach((option) => {
  option.addEventListener("click", () => {
    navToggle();
  });
});

mode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  header.classList.toggle("darNav");
  nav.classList.toggle("darNav");
  imageMode(!modeState);
  navToggle();
});

/* Funciones */

/* Esta funcion sirve para abrir y cerrar el menu */
function navToggle() {
  nav.classList.toggle("active");
}

/* Esta funcion sirve para cambiar el icono del modo oscuro */
function imageMode(condition) {
  mode.src = condition ? "assets/sun.svg" : "assets/moon.svg";
  modeState = !modeState;
}
