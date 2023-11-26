import { router } from './functions/vanillaRouter.js'
import { directRouter } from './functions/vanillaRouter.js'
import { buildCards } from './functions/buildCards.js'

const navButtons = document.querySelectorAll('.header-menu__link')

window.addEventListener('popstate', () => {
    router()
})

window.addEventListener('DOMContentLoaded', () => {
    router()
})

const menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', (event) => {
    event.preventDefault()
    directRouter('menu')
    buildCards('coffee')
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
    })
})
