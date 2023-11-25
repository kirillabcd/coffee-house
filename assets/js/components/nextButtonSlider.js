import { moveNextSlide } from '../functions/moveNextSlide.js'

export const nextButton = () => {
    const button = document.createElement('div')
    button.classList.add('slider__next-button')

    button.addEventListener('click', () => {
        moveNextSlide()
    })

    return button
}
