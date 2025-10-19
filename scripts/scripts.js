const btnMenu = document.getElementById("burgerMenu");
const nav = document.querySelector("nav");
const links = document.querySelectorAll(".links-nav");
const inputs = document.querySelectorAll(".inputControl");

// Activa el menú al hacer clic
links.forEach((link) => {
  link.addEventListener("click", activeMenu);
});

btnMenu.addEventListener("click", activeMenu);

// Controla la visibilidad de las etiquetas de los inputs
inputs.forEach((input) => {
  const labelInput = input.previousElementSibling;

  // Verifica si el input ya tiene contenido al cargar la página
  if (input.value.length > 0) {
    labelInput.classList.add("activeInput");
  }

  input.addEventListener("focus", () => {
    labelInput.classList.add("activeInput");
  });

  input.addEventListener("blur", () => {
    if (input.value.length === 0) {
      labelInput.classList.remove("activeInput");
    }
  });
});

// Esta función controla la visibilidad del menú dependiendo del tamaño de la pantalla
function activeMenu() {
  if (window.innerWidth < 1024) {
    nav.classList.toggle("active");
  }
}
