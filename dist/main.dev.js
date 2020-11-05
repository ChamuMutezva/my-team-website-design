"use strict";

//import { directorsList } from './directors'
var openModal = document.querySelector(".hamburger");
var modal = document.querySelector(".modal");
var closeMenu = document.querySelector(".closemenu");
var form = document.querySelector("form");
console.log(form);
console.log(openModal);
console.log(modal);
openModal.addEventListener("click", function () {
  modal.classList.toggle("showModal");
});
closeMenu.addEventListener("click", function () {
  console.log("i have been clicked");
  modal.classList.toggle("showModal");
});
form.addEventListener("submit", function (evt) {
  console.log("form submitted");
  evt.preventDefault();
});