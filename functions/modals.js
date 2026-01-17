export function closeModal(modal, e){
    if (e.target != modal) {
        modal.style.opacity = "0%";
    }

    setTimeout(() => {
        modal.style.display = "none";
        modal.style.marginTop = "10rem";
        modal.style.opacity = "0%";
    }, 500)
}