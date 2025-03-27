const menu = document.querySelector(".icon");
const imgIcon = document.querySelector(".iconImg");

menu.addEventListener("click", () => {
  imgIcon.src.includes("assets/sun.svg")
    ? (imgIcon.src = "assets/moon.svg")
    : (imgIcon.src = "assets/sun.svg");
});
