export function resetColor(container){
    for (let i = 0; i < container.childElementCount; i++){
        for (let j = 0; j < container.lastChild.childElementCount; j++){
            container.children[i].children[j].style.transition = "all 0s";
            container.children[i].children[j].style.backgroundColor = "rgba(0, 0, 0, 1)";
        }
    }
}

export function reset(container){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }

    
}