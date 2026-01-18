export function squareGenerator(container, pixels=10, opacity=false){
    for (let i = 0; i < pixels; i++){
        const newDivLine = document.createElement("div");
        
        newDivLine.style.display = "flex";
        for (let j = 0; j < pixels; j++){
            const newDiv = document.createElement("div");

            newDiv.style.display = "flex";
            newDiv.style.width = "2rem";
            newDiv.style.height = `${container.clientHeight / pixels}px`;
            newDiv.style.backgroundColor = "rgba(0, 0, 0, 1)";
            newDiv.style.border = "1px solid #2e2e2e";
            newDiv.style.flexGrow = "1";

            newDivLine.append(newDiv);
        }
        container.append(newDivLine);
    }
}