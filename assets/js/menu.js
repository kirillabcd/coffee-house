import { burgerButton, handleShowBurgerMenu } from './functions/handleShowBurgerMenu.js'

import {
    navMenuLinks,
    menuButton,
    handleCloseBurgerMenuOnLink,
} from './functions/handleCloseBurgerMenuOnLink.js'

import { renderCards, container } from './functions/renderCards.js'

import { menuControls, handleMenuControls } from './functions/handleMenuControls.js'

import { loaderButton, handleLoaderButton } from './functions/handleLoaderButton.js'

import { closeModal, modal, closeModalButton } from './functions/closeModal.js'

import {
    sizeButtons,
    addButtons,
    handleSizeButtons,
    handleAddButtons,
} from './functions/handleModal.js'

let currentCategory = 'coffee'

// Burger menu

burgerButton.addEventListener('click', () => handleShowBurgerMenu())
navMenuLinks.forEach((link) => link.addEventListener('click', () => handleCloseBurgerMenuOnLink()))
menuButton.addEventListener('click', () => handleCloseBurgerMenuOnLink())

// Menu items
renderCards(currentCategory)
loaderButton.addEventListener('click', () => handleLoaderButton(currentCategory))

// Menu controls
menuControls.forEach((control) =>
    control.addEventListener('click', () => {
        currentCategory = `${control.dataset.category}`

        handleMenuControls(control)
        renderCards(currentCategory)
    })
)

// Rerender cards when resize
window.addEventListener('resize', () => {
    if (screen.width <= 768) {
        renderCards(currentCategory)
        container.classList.remove('menu__menu-items--hidden')
    }

    if (screen.width >= 768) {
        renderCards(currentCategory)
        container.classList.remove('menu__menu-items--hidden')
    }
})

// Close modal
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal()
    }

    if (event.target === closeModalButton) {
        closeModal()
    }
})

// Size buttons

sizeButtons.forEach((button) =>
    button.addEventListener('click', () => {
        handleSizeButtons(button)
    })
)

// Additive buttons

addButtons.forEach((button) =>
    button.addEventListener('click', () => {
        handleAddButtons(button)
    })
)
