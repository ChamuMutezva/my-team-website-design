const openModal = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".closemenu");
const modal = document.querySelector(".modal");
const cross = Array.from(document.querySelectorAll(".cross"));
const allCards = document.querySelector(".allCards");
const inputs = Array.from(document.querySelectorAll(".feedback"));
let resetInputs = true;

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
inputs.forEach(input => {
    console.log(input);
  
   input.addEventListener("invalid", function () {
    input.nextElementSibling.classList.add("errorDisplay");
    input.classList.add("invalidInput")
   })

   input.addEventListener("input", function () {
       if (input.validity.valid) {
        input.nextElementSibling.classList.remove("errorDisplay");
        input.classList.remove("invalidInput")
       } else {
           resetInputs = false;
       }
   })

})


if (form !== null) {
    form.addEventListener("submit", (evt) => {
        console.log(evt.target);
        evt.preventDefault();
        if (resetInputs) {
            //clear all inputs when data is correct
            inputs.forEach(input => {
                console.log("Clear all");
                input.value = "";

            })
        }
        if(resetInputs){
            alert("Thank you, form successfully submitted")
        }
  
    })

}


