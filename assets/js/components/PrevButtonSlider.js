import { movePrevSlide } from '../functions/movePreviousSlide.js'

export const prevButton = () => {
    const button = document.createElement('div')
    button.classList.add('slider__prev-button')

    button.addEventListener('click', () => {
        movePrevSlide()
    })

    return button
}
