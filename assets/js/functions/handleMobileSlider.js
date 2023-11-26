import { moveNextSlide } from './moveNextSlide.js'
import { movePrevSlide } from './movePreviousSlide.js'

export const handleMobileSlider = (sliderRow) => {
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
        startX = 0
        startY = 0

        let touchObj = event.changedTouches[0]
        startX = touchObj.pageX
        startY = touchObj.pageY
        startTime = new Date().getTime()
        event.preventDefault()
    })

    sliderRow.addEventListener('touchmove', function (event) {
        event.preventDefault()
    })

    sliderRow.addEventListener('touchend', function (event) {
        let touchObj = event.changedTouches[0]
        distX = touchObj.pageX - startX
        distY = touchObj.pageY - startY
        elapsedTime = new Date().getTime() - startTime

        if (elapsedTime >= allowedTime) {
            if (Math.abs(distX) >= limitX && Math.abs(distY) <= limitY) {
                if (distX > 0) {
                    movePrevSlide()
                } else {
                    moveNextSlide()
                }
            }
        }
    })
}
