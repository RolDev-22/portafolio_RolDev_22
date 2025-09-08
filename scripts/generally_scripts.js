const btnMenu = document.getElementById("hamburger");
const optionsMenu = document.querySelectorAll(".optionsMenu");

btnMenu.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
});

optionsMenu.forEach((option) => {
  const nav = document.querySelector("nav");
  option.addEventListener("click", () => {
    // Primero quitamos la clase a todos
    optionsMenu.forEach((opt) => opt.classList.remove("activeMenu"));

    // Luego se la agregamos solo al que se presionó
    nav.classList.remove("active"); //removemos el menú para cuando es clickeado
    option.classList.add("activeMenu");
  });
});
