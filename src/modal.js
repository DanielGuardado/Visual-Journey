const modal = document.querySelector(".modal");
const modalBackground = document.querySelector(".modal-background");
const buttons = document.querySelectorAll("button");
const backgroundClose = modalBackground.addEventListener("click", function () {
  modal.style.display = "none";
  modalBackground.style.display = "none";
});
const modalOpen = buttons[0].addEventListener("click", function () {
  modal.style.display = "block";
  modalBackground.style.display = "block";
});
const modalClose = buttons[1].addEventListener("click", () => {
  modal.style.display = "none";
  modalBackground.style.display = "none";
});
