const sliderRow = () => document.querySelector('.slider__slider-row')
let counter = 0

export const moveNextSlide = () => {
    counter = increaseCounter()
    sliderRow().style.transform = `translateX(${-500 * counter}px)`
    console.log(counter)
}

function increaseCounter() {
    if (counter < 2) {
        counter++
    } else {
        counter = 0
    }
    return counter
}
