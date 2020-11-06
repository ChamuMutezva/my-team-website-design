//import { directorsList } from './directors'
const openModal = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".closemenu");
const modal = document.querySelector(".modal");
const cross = Array.from(document.querySelectorAll(".cross"));
const allCards = document.querySelector(".allCards");
//clickTarget.closest("li") to find nearest li tag 
console.log(allCards);
//console.log(cross)
openModal.addEventListener("click", () => {
    modal.classList.toggle("showModal")
})
closeMenu.addEventListener("click", () => {
    console.log("i have been clicked")
    modal.classList.toggle("showModal")
})
allCards.addEventListener("click", (event) => {
    const clickedTarget = event.target;
    console.log(clickedTarget)
    if(clickedTarget.closest("div").classList.contains("cross")){
        const allFigures = Array.from(document.querySelectorAll("figure"))
        console.log(clickedTarget.closest("div").nextElementSibling)
       clickedTarget.closest("div").nextElementSibling.classList.toggle("displayCardModal");
       const figureTarget = document.querySelector("figure")
       clickedTarget.closest("figure").previousElementSibling.classList.toggle("hideBusinessCard");
      // console.log(allFigures)
      // figureTarget.classList.toggle("hideBusinessCard");
    }

})

