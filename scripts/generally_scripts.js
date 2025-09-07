const btnMenu = document.getElementById("hamburger");
const optionsMenu = document.querySelectorAll(".optionsMenu");

btnMenu.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
});

optionsMenu.forEach((option) => {
  option.addEventListener("click", () => {
    const nav = document.querySelector("nav");
    nav.classList.remove("active");
  });
});
