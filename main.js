//import { directorsList } from './directors'
const openModal = document.querySelector(".hamburger");
const modal = document.querySelector(".modal");
const closeMenu = document.querySelector(".closemenu")
const form = document.querySelector("form")
console.log(form)
console.log(openModal);
console.log(modal)
openModal.addEventListener("click", () => {
    modal.classList.toggle("showModal")
})
closeMenu.addEventListener("click", () => {
    console.log("i have been clicked")
    modal.classList.toggle("showModal")
})
form.addEventListener("submit", (evt) => {
    console.log("form submitted")
    evt.preventDefault();
   
})
