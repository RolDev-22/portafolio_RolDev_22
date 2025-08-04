const mode = document.getElementById("mode");
const menu = document.getElementById("btn-menu");
const optionMenu = document.querySelectorAll(".option-Menu");

optionMenu.forEach((link) => {
  link.addEventListener("click", () => {
    const nav = document.querySelector("nav");
    nav.classList.remove("open");
  });
});

menu.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("open");
});
