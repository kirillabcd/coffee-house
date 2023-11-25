import { router } from './functions/vanillaRouter.js'
import { directRouter } from './functions/vanillaRouter.js'

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
})
