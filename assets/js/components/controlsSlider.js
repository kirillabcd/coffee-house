import { moveByControl } from '../functions/moveByControl.js'

export const controlsSlider = () => {
    const controlsDiv = document.createElement('div')
    controlsDiv.classList.add('slider__controls')

    for (let i = 0; i < 3; i++) {
        const controlDiv = document.createElement('div')
        controlDiv.classList.add('slider__control')

        const decorSpan = document.createElement('span')
        decorSpan.classList.add('slider__decor')

        if (i === 0) {
            decorSpan.classList.add('slider__decor--active')
        }

        controlDiv.appendChild(decorSpan)

        // Append control element to the controls block
        controlsDiv.appendChild(controlDiv)

        controlDiv.addEventListener('click', () => {
            moveByControl(i)
        })
    }

    return controlsDiv
}
