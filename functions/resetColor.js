export function resetColor(container){
    for (let i = 0; i < container.childElementCount; i++){
        
        for (let j = 0; j < container.lastChild.childElementCount; j++){
            container.children[i].children[j].style.backgroundColor = "white";
        }
    }
}