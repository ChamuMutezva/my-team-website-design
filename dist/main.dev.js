"use strict";

//import { directorsList } from './directors'
var openModal = document.querySelector(".hamburger");
var closeMenu = document.querySelector(".closemenu");
var modal = document.querySelector(".modal");
console.log(openModal);
console.log(modal);
openModal.addEventListener("click", function () {
  modal.classList.toggle("showModal");
});
closeMenu.addEventListener("click", function () {
  console.log("i have been clicked");
  modal.classList.toggle("showModal");
});