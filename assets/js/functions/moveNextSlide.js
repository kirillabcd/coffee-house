const sliderRow = () => document.querySelector('.slider__slider-row')
const sliderControls = () => document.querySelectorAll('.slider__decor')

let counter = 0

export const moveNextSlide = () => {
    counter = increaseCounter()
    sliderRow().style.transform = `translateX(${-500 * counter}px)`
    sliderControls().forEach((control) => {
        control.classList.remove('slider__decor--active')
    })
    sliderControls()[counter].classList.add('slider__decor--active')
}

function increaseCounter() {
    if (counter < sliderRow().childElementCount - 1) {
        counter++
    } else {
        counter = 0
    }
    return counter
}
