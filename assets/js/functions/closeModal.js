export const modal = document.querySelector('.modal')
export const closeModalButton = document.querySelector('.modal__close-button')
export const closeModal = () => {
    modal.classList.remove('modal--visible')
    document.body.classList.remove('lock-scroll')
}
