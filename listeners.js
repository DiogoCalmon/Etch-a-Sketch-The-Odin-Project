import { hexToRGBA } from "./functions/convertColors.js";
import { closeModal } from "./functions/modals.js";
import { opacityColor } from "./functions/opacityColor.js";
import { generateRandomColor } from "./functions/randomColor.js";
import { resetColor, reset } from "./functions/resetColor.js";
import { squareGenerator } from "./functions/squareGenerator.js";

const resetButton = document.querySelector("#resetButton");
const colorInput = document.querySelector("#colorInput");
const pixelsInput = document.querySelector("#pixelsInput");

const randomColorButton = document.querySelector("#randomColorButton");
const opacityButton = document.querySelector("#opacityButton");

const container = document.querySelector("#container2");
const startModal = document.querySelector("#startModal");

let color = "rgb(255, 255, 255)";
let opacity = 100;

let randomColor = false;
let opacitySelected = false;

resetButton.addEventListener("click", () => {
    console.log("resetButton");
    resetColor(container);
});

colorInput.addEventListener("input", (e) => {
    console.log("colorInput");
    color = e.target.value
});

randomColorButton.addEventListener("click", () => {
    randomColorButton.classList.toggle("enabled");

    if (randomColorButton.getAttribute("class") == "unpressed enabled"){
        randomColor = true;
    } else {
        randomColor = false;
    }

});

opacityButton.addEventListener("click", () => {
    opacityButton.classList.toggle("enabled");
    opacity = 0;

    if (opacityButton.getAttribute("class") == "unpressed enabled"){
        opacitySelected = true;
    } else {
        opacitySelected = false;
    }
})

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
    squareGenerator(container);
    
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

    if (randomColor){
        color = generateRandomColor();
    }

    if (opacitySelected){
        // let newColor
        // opacity += 10;

        // if (color.includes("#")){
        //     newColor = opacityColor(hexToRGBA(color), window.getComputedStyle(e.target).backgroundColor, opacity);
        // } else {
        //     newColor = opacityColor(color, window.getComputedStyle(e.target).backgroundColor, opacity);
        // }
        // e.target.style.transition = "all 0.5s";
        // e.target.style.backgroundColor = newColor;

        // Alternativa

        opacity += 10;
        let rgbaOpacity = opacity / 100;
        if (rgbaOpacity > 1.0) {
            rgbaOpacity = 1;
        }

        let newColor;
        let newColorFormated
        if (color.includes("#")){
            newColor = hexToRGBA(color);
            console.log("convert hex " + color + " for " + hexToRGBA(color));
            // eu tenho que substituir o "1)" por um "${opacity/100})"
            newColorFormated = newColor.replace("1)", "");
            newColorFormated = newColorFormated.concat("", `${rgbaOpacity})`);
            console.log("newColorFormated: "+newColorFormated);
        } else {
            newColor = color;
            console.log("rgba: "+color);

            newColorFormated = newColor.replace("1)", "");
            newColorFormated = newColorFormated.concat("", `${rgbaOpacity})`);
            console.log("newColorFormated from rgba: "+newColorFormated);
        }
        e.target.style.backgroundColor = newColorFormated;
    } else {
        e.target.style.backgroundColor = color;
    }
})
