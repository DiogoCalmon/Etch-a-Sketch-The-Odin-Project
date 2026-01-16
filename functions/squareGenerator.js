export function squareGenerator(container, pixels){

    for (let i = 0; i < pixels; i++){
        const newDivLine = document.createElement("div");
        newDivLine.style.display = "flex";
        for (let j = 0; j < pixels; j++){
            const newDiv = document.createElement("div");
            newDiv.style.display = "flex";
            newDiv.style.width = "2rem";
            newDiv.style.height = `${container.clientHeight / pixels}px`;
            newDiv.style.backgroundColor = "white";
            newDiv.style.border = "1px solid black";
            newDiv.style.flexGrow = "1";

            newDivLine.append(newDiv);
        }
        container.append(newDivLine);
    }
}