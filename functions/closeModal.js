export function closeModal(startModal, e){
    if (e.target != startModal) {
        startModal.style.opacity = "0%";
    }

    setTimeout(() => {
        startModal.style.display = "none";
    }, 500)
}