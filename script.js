/* jshint esversion: 7 */
/* jshint -W097 */
// "use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");
const showBtn = document.querySelectorAll(".show-modal");

const addStyle = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const removeStyle = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (i = 0; i < showBtn.length; i++) {
  showBtn[i].addEventListener("click", removeStyle);
}
closeBtn.addEventListener("click", addStyle);
overlay.addEventListener("click", addStyle);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    addStyle();
  }
});
