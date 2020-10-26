const openModal = document.querySelector(".hamburger");
const modal = document.querySelector(".modal");
const closeMenu = document.querySelector(".closemenu")
console.log(openModal);
console.log(modal)
openModal.addEventListener("click", () => {   
    modal.classList.toggle("showModal")
})
closeMenu.addEventListener("click", () => {
    console.log("i have been clicked")
    modal.classList.toggle("showModal")
})