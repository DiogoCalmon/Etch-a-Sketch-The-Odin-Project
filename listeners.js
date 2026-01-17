import { closeModal } from "./functions/modals.js";
import { resetColor, reset } from "./functions/resetColor.js";
import { squareGenerator } from "./functions/squareGenerator.js";

const resetButton = document.querySelector("#resetButton");
const colorInput = document.querySelector("#colorInput");
const pixelsInput = document.querySelector("#pixelsInput");

const randomColorButton = document.querySelector("#randomColorButton");

const container = document.querySelector("#container2");
const startModal = document.querySelector("#startModal");

let color = "black";

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
            const pixelsModal = document.querySelector("#pixelsModal");
            pixelsModal.style.display = "flex";

            setTimeout(() => {
                pixelsModal.style.marginTop = "0rem";
                pixelsModal.style.opacity = "100%";
            }, 100);

            window.addEventListener("click", e => {
                closeModal(pixelsModal, e)
            }, {onde: true});

            return;
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
