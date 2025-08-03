const mode = document.getElementById("mode");
const menu = document.getElementById("btn-menu");

menu.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("open");
});

mode.addEventListener("click", () => {
  let imgMode = mode.getAttribute("src");

  imgMode.includes("moon")
    ? mode.setAttribute("src", "./public/assets/sun.svg")
    : mode.setAttribute("src", "./public/assets/moon.svg");
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
