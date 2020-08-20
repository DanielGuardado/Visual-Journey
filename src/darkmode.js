const music = document.getElementById("music");
const instructions = document.getElementById("instructions");
const li = document.querySelectorAll("li");
const background = document.getElementById("bg");
const dark = document.getElementById("dark-mode");
const color = document.getElementById("color-mode");
const darkMode = dark.addEventListener("click", () => {
  background.style.background = "black";
  dark.style.display = "none";
  color.style.display = "block";
  li.forEach((el) => {
    el.style.color = "white";
  });
  music.style.color = "white";
  instructions.style.color = "white";
  instructions.style.border = "3px solid white";
});

const colorMode = color.addEventListener("click", () => {
  background.style.background =
    "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)";
  dark.style.display = "block";
  color.style.display = "none";
  li.forEach((el) => {
    el.style.color = "black";
  });
  music.style.color = "black";
  instructions.style.color = "black";
  instructions.style.border = "3px solid black";
});
