import { directRouter } from '../functions/vanillaRouter.js'
import { buildCards } from '../functions/buildCards.js'

export const primaryButton = () => {
    const button = createPrimaryButton()

    button.addEventListener('click', () => {
        directRouter('menu')
        buildCards('coffee')
    })

    return button
}

function createPrimaryButton() {
    // Create a button with the class button--primary
    const buttonElement = document.createElement('button')
    buttonElement.classList.add('button--primary')

    // Create a span with the class button-text
    const buttonTextSpan = document.createElement('span')
    buttonTextSpan.classList.add('button-text')
    buttonTextSpan.textContent = ' Menu '

    // Create an image for the button
    const buttonIconImg = document.createElement('img')
    buttonIconImg.src = './assets/img/icons/coffee-cup.svg'
    buttonIconImg.alt = 'cup'
    buttonIconImg.classList.add('button__icon')

    // Add text and image to the button
    buttonElement.append(buttonTextSpan, buttonIconImg)

    return buttonElement
}
