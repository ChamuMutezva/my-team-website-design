"use strict";

//import { directorsList } from './directors'
var openModal = document.querySelector(".hamburger");
var closeMenu = document.querySelector(".closemenu");
var modal = document.querySelector(".modal");
var cross = Array.from(document.querySelectorAll(".cross"));
var allCards = document.querySelector(".allCards"); //clickTarget.closest("li") to find nearest li tag 

console.log(allCards); //console.log(cross)

openModal.addEventListener("click", function () {
  modal.classList.toggle("showModal");
});
closeMenu.addEventListener("click", function () {
  console.log("i have been clicked");
  modal.classList.toggle("showModal");
});
allCards.addEventListener("click", function (event) {
  var clickedTarget = event.target;
  console.log(clickedTarget);

  if (clickedTarget.closest("div").classList.contains("cross")) {
    var allFigures = Array.from(document.querySelectorAll("figure"));
    console.log(clickedTarget.closest("div").nextElementSibling);
    clickedTarget.closest("div").nextElementSibling.classList.toggle("displayCardModal");
    var figureTarget = document.querySelector("figure");
    clickedTarget.closest("figure").previousElementSibling.classList.toggle("hideBusinessCard"); // console.log(allFigures)
    // figureTarget.classList.toggle("hideBusinessCard");
  }
});