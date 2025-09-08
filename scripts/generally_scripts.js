const btnMenu = document.getElementById("hamburger");
const optionsMenu = document.querySelectorAll(".optionsMenu");

btnMenu.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
});

optionsMenu.forEach((option) => {
  const nav = document.querySelector("nav");

  // Luego se la agregamos solo al que se presionó
  nav.classList.remove("active");
});
