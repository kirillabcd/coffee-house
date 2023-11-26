const sliderRow = () => document.querySelector('.slider__slider-row')
const sliderControls = () => document.querySelectorAll('.slider__decor')
let counter = 0

export const movePrevSlide = () => {
    counter = decreaseCounter()
    sliderRow().style.transform = `translateX(${-500 * counter}px)`
    sliderControls().forEach((control) => {
        control.classList.remove('slider__decor--active')
    })
    sliderControls()[counter].classList.add('slider__decor--active')
}

function decreaseCounter() {
    if (counter > 0) {
        counter--
    } else {
        counter = 2
    }
    return counter
}
