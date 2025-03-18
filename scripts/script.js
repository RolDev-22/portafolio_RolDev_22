const menu = document.querySelector(".icon");
const imgIcon = document.querySelector(".iconImg");

menu.addEventListener("click", () => {
  imgIcon.src.includes("sun.svg")
    ? (imgIcon.src = "../assents/moon.svg")
    : (imgIcon.src = "../assents/sun.svg");
});
