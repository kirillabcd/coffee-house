import { router } from './functions/vanillaRouter.js'
import { directRouter } from './functions/vanillaRouter.js'
import { buildCards } from './functions/buildCards.js'
import { handleBurgerMenu } from './functions/handleBurgerMenu.js'

const navButtons = document.querySelectorAll('.header-menu__link')
const burgerButton = document.querySelector('.burger-button')

window.addEventListener('popstate', () => {
    router()
})

window.addEventListener('DOMContentLoaded', () => {
    router()
})

const menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', (event) => {
    event.preventDefault()
    menuButton.classList.add('menu-button--active')
    directRouter('menu')
    buildCards('coffee')
    if (window.innerWidth <= 768) {
        handleBurgerMenu()
    }
})

burgerButton.addEventListener('click', () => {
    handleBurgerMenu()
})

navButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault()
        const targetSection = button.dataset.link

        if (location.pathname === '/menu') {
            directRouter(targetSection)
        }

        const targetElement = document.querySelector(targetSection)
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
            })
        }

        if (window.innerWidth <= 768) {
            handleBurgerMenu()
        }
    })
})
