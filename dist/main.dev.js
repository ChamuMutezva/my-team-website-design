"use strict";

var openModal = document.querySelector(".hamburger");
var closeMenu = document.querySelector(".closemenu");
var modal = document.querySelector(".modal");
var cross = Array.from(document.querySelectorAll(".cross"));
var allCards = document.querySelector(".allCards");
var inputs = Array.from(document.querySelectorAll(".feedback"));
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
    inputs.forEach(function (input) {
      console.log(input);

      if (input.value == "") {
        console.log(input); //  input.setCustomValidity("First Name can not be blank")
        // input.nextElementSibling.classList.add("errorDisplay");
        //input.nextElementSibling.innerHTML = `${input.name} cannot be empty`;
      } else {// input.setCustomValidity("")
          //input.nextElementSibling.classList.remove("errorDisplay");
          //input.nextElementSibling.innerHTML = "";
        }
    });
    evt.preventDefault();
  });
}