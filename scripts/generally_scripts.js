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

// Para asegurarse de que el menú esté correctamente visible cuando la pantalla se redimensione
function checkMenuVisibility() {
  if (window.innerWidth >= 1024) {
    nav.classList.remove("active");
  }
}

// Llamar a la función al cargar y cada vez que la ventana se redimensione
window.addEventListener("resize", checkMenuVisibility);
checkMenuVisibility();
