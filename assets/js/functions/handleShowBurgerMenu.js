export const burgerButton = document.querySelector('.header__burger-button')

export const handleShowBurgerMenu = () => {
    const navMenu = document.querySelector('.header__navigation')
    burgerButton.classList.toggle('header__burger-button--active')
    navMenu.classList.toggle('header__navigation--active')
    document.body.classList.toggle('lock-scroll')
}
