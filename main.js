//import { directorsList } from './directors'
const openModal = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".closemenu");
const modal = document.querySelector(".modal");
const cross = Array.from(document.querySelectorAll(".cross"));
const allCards = document.querySelector(".allCards");

const form = document.querySelector("form")
console.log(form)

//nav - modal menu for all pages
openModal.addEventListener("click", () => {
    modal.classList.toggle("showModal")
})
closeMenu.addEventListener("click", () => {
    console.log("i have been clicked")
    modal.classList.toggle("showModal")
})
//end of nav - modal

//about page - flip card to show additional information
if (allCards !== null) {
    allCards.addEventListener("click", (event) => {
        const clickedTarget = event.target;
        console.log(clickedTarget)
        if (clickedTarget.closest("div").classList.contains("cross")) {
            console.log(clickedTarget.closest("div").nextElementSibling)
            clickedTarget.closest("div").nextElementSibling.classList.toggle("displayCardModal");
            clickedTarget.closest("div").classList.toggle("crossClicked");
        }

    })
}
//end of about page implementation
//contact page

if (form !== null) {
    form.addEventListener("submit", (evt) => {
        console.log(evt.target)
    })
}