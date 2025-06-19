const menu = document.getElementById("menu");
const nav = document.querySelector("nav");
const mode = document.getElementById("mode");
const header = document.querySelector("header");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

mode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  header.classList.toggle("dark");
  nav.classList.toggle("active");
  nav.classList.toggle("darNav");
  mode.src = document.body.classList.contains("dark")
    ? "assets/sun.svg"
    : "assets/moon.svg";
});
