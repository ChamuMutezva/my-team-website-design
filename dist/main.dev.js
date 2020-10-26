"use strict";

var openModal = document.querySelector(".hamburger");
var modal = document.querySelector(".modal");
var closeMenu = document.querySelector(".closemenu");
console.log(openModal);
console.log(modal);
openModal.addEventListener("click", function () {
  modal.classList.toggle("showModal");
});
closeMenu.addEventListener("click", function () {
  console.log("i have been clicked");
  modal.classList.toggle("showModal");
});