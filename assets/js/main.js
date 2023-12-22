import { burgerButton, handleShowBurgerMenu } from './functions/handleShowBurgerMenu.js'

import {
    navMenuLinks,
    menuButton,
    handleCloseBurgerMenuOnLink,
} from './functions/handleCloseBurgerMenuOnLink.js'

import {
    nextButton,
    prevButton,
    paginationEls,
    cloneFirstAndLastSlides,
    goToNextSlide,
    goToPrevSlide,
    moveSliderByControl,
    handleMobileSlider,
    updateSliderPosition,
} from './functions/moveSlider.js'

// Burger menu

burgerButton.addEventListener('click', () => handleShowBurgerMenu())
navMenuLinks.forEach((link) => link.addEventListener('click', () => handleCloseBurgerMenuOnLink()))
menuButton.addEventListener('click', () => handleCloseBurgerMenuOnLink())

// Slider

cloneFirstAndLastSlides()

nextButton.addEventListener('click', () => goToNextSlide())
prevButton.addEventListener('click', () => goToPrevSlide())

paginationEls.forEach((control, index) =>
    control.addEventListener('click', () => moveSliderByControl(control, index))
)

window.addEventListener('resize', () => updateSliderPosition())

// Mobile-slider

handleMobileSlider()
