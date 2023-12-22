import { getDeviceType } from './getDeviceType.js'

export const nextButton = document.querySelector('.slider__button--next-button')
export const prevButton = document.querySelector('.slider__button--prev-button')
const sliderRow = document.querySelector('.slider__row')
const slides = () => document.querySelectorAll('.slider__slide')
const countOfSlides = () => slides().length
const gap = parseFloat(window.getComputedStyle(sliderRow).getPropertyValue('gap'))
const slideWidth = () => sliderRow.offsetWidth + gap

export const paginationEls = document.querySelectorAll('.slider__control')

let counter = 1
let pagination = 0

export const cloneFirstAndLastSlides = () => {
    const firstSlide = slides()[0].cloneNode(true)
    const lastSlide = slides()[slides().length - 1].cloneNode(true)

    sliderRow.prepend(lastSlide)
    sliderRow.append(firstSlide)

    sliderRow.style.transform = `translateX(${-slideWidth()}px)`
}

export const goToNextSlide = () => {
    increaseCounter()
    moveSlider()

    if (counter >= countOfSlides() - 1) {
        sliderRow.addEventListener('transitionend', showFirstSlide)
    }

    increasePagination()
    movePagination()
}

export const goToPrevSlide = () => {
    decreaseCounter()
    moveSlider()

    if (counter <= 0) {
        sliderRow.addEventListener('transitionend', showLastSlide)
    }

    decreasePagination()
    movePagination()
}

export const updateSliderPosition = () => {
    sliderRow.style.transform = `translateX(${-slideWidth()}px)`
}

function increaseCounter() {
    counter++
}

function decreaseCounter() {
    counter--
}

function moveSlider() {
    nextButton.classList.add('slider__button--disabled')
    prevButton.classList.add('slider__button--disabled')
    sliderRow.style.transition = '0.5s ease'
    sliderRow.style.transform = `translateX(${-slideWidth() * counter}px)`

    sliderRow.addEventListener('transitionend', () => {
        nextButton.classList.remove('slider__button--disabled')
        prevButton.classList.remove('slider__button--disabled')
    })
}

function showFirstSlide() {
    counter = 1
    sliderRow.style.transition = 'none'
    sliderRow.style.transform = `translateX(${-slideWidth() * counter}px)`

    sliderRow.removeEventListener('transitionend', showFirstSlide)
}

function showLastSlide() {
    counter = slides().length - 2
    sliderRow.style.transition = 'none'
    sliderRow.style.transform = `translateX(${-slideWidth() * counter}px)`

    sliderRow.removeEventListener('transitionend', showLastSlide)
}

function increasePagination() {
    pagination++
    if (pagination > paginationEls.length - 1) {
        pagination = 0
    }
}

function decreasePagination() {
    pagination--
    if (pagination < 0) {
        pagination = paginationEls.length - 1
    }
}

function movePagination() {
    paginationEls.forEach((el) => el.classList.remove('slider__control--active'))
    paginationEls[pagination].classList.add('slider__control--active')
}

export const moveSliderByControl = (control, index) => {
    counter = index + 1
    pagination = index

    paginationEls.forEach((element) => element.classList.remove('slider__control--active'))
    control.classList.add('slider__control--active')

    sliderRow.style.transition = '0.5s ease'
    sliderRow.style.transform = `translateX(${-slideWidth() * counter}px)`
}

export const handleMobileSlider = () => {
    let startX = 0
    let startY = 0
    let distX = 0
    let distY = 0

    let startTime = 0
    let elapsedTime = 0

    let limitX = 80
    let limitY = 100
    let allowedTime = 200

    sliderRow.addEventListener('touchstart', function (event) {
        if (getDeviceType() === 'mobile' || window.innerWidth <= 768) {
            let touchObj = event.changedTouches[0]
            startX = touchObj.pageX
            startY = touchObj.pageY
            startTime = new Date().getTime()
            // event.preventDefault()
        }
    })

    sliderRow.addEventListener('touchmove', function (event) {
        let touchObj = event.changedTouches[0]
        distY = touchObj.pageY - startY

        if (event.cancelable && Math.abs(distY) < limitY) {
            event.preventDefault()
        }
    })

    sliderRow.addEventListener('touchend', function (event) {
        let touchObj = event.changedTouches[0]
        distX = touchObj.pageX - startX
        distY = touchObj.pageY - startY
        elapsedTime = new Date().getTime() - startTime

        if (elapsedTime >= allowedTime) {
            if (Math.abs(distX) >= limitX && Math.abs(distY) <= limitY) {
                if (distX > 0) {
                    goToPrevSlide()
                } else {
                    goToNextSlide()
                }
            }
        }
    })
}
