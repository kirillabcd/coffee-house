export const handleBurgerMenu = () => {
    const navMenu = document.querySelector('.nav')
    const burgerButton = document.querySelector('.burger-button')
    navMenu.classList.toggle('nav--visible')
    document.body.classList.toggle('lock-scroll')
    burgerButton.classList.toggle('burger-button--opened')
}
