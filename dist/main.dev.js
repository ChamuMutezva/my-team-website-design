"use strict";

var openModal = document.querySelector(".hamburger");
var closeMenu = document.querySelector(".closemenu");
var modal = document.querySelector(".modal");
var cross = Array.from(document.querySelectorAll(".cross"));
var allCards = document.querySelector(".allCards");
var form = document.querySelector("form");
console.log(form); //nav - modal menu for all pages

openModal.addEventListener("click", function () {
  modal.classList.toggle("showModal");
});
closeMenu.addEventListener("click", function () {
  console.log("i have been clicked");
  modal.classList.toggle("showModal");
}); //end of nav - modal
//about page - flip card to show additional information

if (allCards !== null) {
  allCards.addEventListener("click", function (event) {
    var clickedTarget = event.target;
    console.log(clickedTarget);

    if (clickedTarget.closest("div").classList.contains("cross")) {
      console.log(clickedTarget.closest("div").nextElementSibling);
      clickedTarget.closest("div").nextElementSibling.classList.toggle("displayCardModal");
      clickedTarget.closest("div").classList.toggle("crossClicked");
    }
  });
} //end of about page implementation
//contact page


if (form !== null) {
  form.addEventListener("submit", function (evt) {
    console.log(evt.target);
    evt.preventDefault();
  });
}