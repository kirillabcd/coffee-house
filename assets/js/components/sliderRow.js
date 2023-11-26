import { handleMobileSlider } from '../functions/handleMobileSlider.js'

export const sliderRow = () => {
    const sliderRowDiv = document.createElement('div')
    sliderRowDiv.classList.add('slider__slider-row')
    handleMobileSlider(sliderRowDiv)
    return sliderRowDiv
}
