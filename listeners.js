import { reset } from "./functions/reset.js";
import { squareGenerator } from "./functions/squareGenerator.js";

const resetButton = document.querySelector("#resetButton");
const colorInput = document.querySelector("#colorInput");
const pixelsInput = document.querySelector("#pixelsInput");

const container = document.querySelector("#container2");

let color;

resetButton.addEventListener("click", () => {
    console.log("resetButton");
    reset(container)
});

colorInput.addEventListener("input", () => {
    console.log("colorInput");
});

pixelsInput.addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        squareGenerator(container, e.target.value);
    }
});

window.addEventListener("load", () => {
    squareGenerator(container, 10);
})
