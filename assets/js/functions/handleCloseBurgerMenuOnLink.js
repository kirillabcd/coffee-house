export const navMenuLinks = document.querySelectorAll('.header__menu-link')
export const menuButton = document.querySelector('.menu-button')

export const handleCloseBurgerMenuOnLink = () => {
    const navMenu = document.querySelector('.header__navigation')
    const burgerButton = document.querySelector('.header__burger-button')

    if (burgerButton.classList.contains('header__burger-button--active')) {
        burgerButton.classList.remove('header__burger-button--active')
        navMenu.classList.remove('header__navigation--active')
        document.body.classList.remove('lock-scroll')
    }
}
