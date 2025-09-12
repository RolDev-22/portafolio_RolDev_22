const btnMenu = document.getElementById("hamburger");
const optionsMenu = document.querySelectorAll(".optionsMenu");
const inputsForm = document.querySelectorAll(".inputStyle");
const labelsForm = document.querySelectorAll(".labelStyle");

$(document).ready(function () {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      $(".JqLeft").hide("drop", { direction: "left" }, 2000);
      $(".JqRight").hide("drop", { direction: "right" }, 2000);
    } else {
      $(".JqLeft").show("slide", { direction: "left" }, 2000);
      $(".JqRight").show("slide", { direction: "right" }, 2000);
    }
  });
});

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

inputsForm.forEach((input, index) => {
  input.addEventListener("focus", () => {
    labelsForm[index].classList.add("activeLabel");
  });
  if (input.value != "") {
    labelsForm[index].classList.add("activeLabel");
  }
  input.addEventListener("blur", () => {
    if (input.value == "") {
      labelsForm[index].classList.remove("activeLabel");
    }
  });
});
