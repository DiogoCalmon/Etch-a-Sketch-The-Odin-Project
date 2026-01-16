export function reset(container){
    while(container.firstChild){
        container.firstChild.remove()
    }
}