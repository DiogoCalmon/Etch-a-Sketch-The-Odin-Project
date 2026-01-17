import { closeModal } from "./functions/closeModal.js";
import { resetColor } from "./functions/resetColor.js";
import { squareGenerator } from "./functions/squareGenerator.js";

const resetButton = document.querySelector("#resetButton");
const colorInput = document.querySelector("#colorInput");
const pixelsInput = document.querySelector("#pixelsInput");

const container = document.querySelector("#container2");
const startModal = document.querySelector("#startModal");

let color = "red";

resetButton.addEventListener("click", () => {
    console.log("resetButton");
    resetColor(container);
});

colorInput.addEventListener("input", (e) => {
    console.log("colorInput");
    color = e.target.value
});

pixelsInput.addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        if (e.target.value < 1 || e.target.value > 100) {
            
        }
        reset(container)
        squareGenerator(container, e.target.value);
    }
});

window.addEventListener("load", () => {
    
    const body = document.querySelector("body")

    squareGenerator(container, 10);
    // startModal.style.display = "flex";
    startModal.style.marginTop = "0rem";
    startModal.style.opacity = "100%";
});

window.addEventListener("click", (e) => {
    closeModal(startModal, e);
}, { once: true});

container.addEventListener("mouseover", e => {
    if (e.target.id === "container2"){
        return
    }

    e.target.style.backgroundColor = color;
})
