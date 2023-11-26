const sliderRow = () => document.querySelector('.slider__slider-row')
const controlDecors = () => document.querySelectorAll('.slider__decor')

export const moveByControl = (i) => {
    controlDecors().forEach((decor) => {
        decor.classList.remove('slider__decor--active')
    })
    sliderRow().style.transform = `translateX(${-500 * i}px)`
    controlDecors()[i].classList.add('slider__decor--active')
}
