const sliderRow = () => document.querySelector('.slider__slider-row')
let counter = 0

export const movePrevSlide = () => {
    counter = decreaseCounter()
    sliderRow().style.transform = `translateX(${-500 * counter}px)`
    console.log(counter)
}

function decreaseCounter() {
    if (counter > 0) {
        counter--
    } else {
        counter = 2
    }
    return counter
}
