export function closeModal(startModal, e){
    console.log(e.target)
    if (e.target != startModal) {
        startModal.style.opacity = "0%";
    }
}