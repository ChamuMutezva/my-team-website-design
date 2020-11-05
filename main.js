//import { directorsList } from './directors'
const openModal = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".closemenu");
const modal = document.querySelector(".modal");
console.log(openModal);
console.log(modal)
openModal.addEventListener("click", () => {
    modal.classList.toggle("showModal")
})
closeMenu.addEventListener("click", () => {
    console.log("i have been clicked")
    modal.classList.toggle("showModal")
})

