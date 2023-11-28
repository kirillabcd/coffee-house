import { getData } from '../functions/buildCards.js'
import { secondaryButton } from './secondaryButton.js'

async function getPick(name) {
    const data = await getData()
    const pick = await data.filter((el) => el.name === name)[0]
    return pick
}

export const modal = async (dataname) => {
    // Create Modal Container
    const modalContainer = document.createElement('div')
    modalContainer.className = 'modal'

    const pick = await getPick(dataname)

    // Create Modal Window
    const modalWindow = document.createElement('div')
    modalWindow.className = 'modal-window'

    // Create Modal Image Box
    const modalImgBox = document.createElement('div')
    modalImgBox.className = 'modal__img-box'

    // Create Modal Image
    const modalImg = document.createElement('img')
    modalImg.src = `${pick.photo}`
    modalImg.alt = 'photo'
    modalImg.className = 'modal__img'

    modalImgBox.append(modalImg)

    // Create Modal Info Container
    const modalInfo = document.createElement('div')
    modalInfo.className = 'modal__info'

    // Create Modal Header
    const modalHeader = document.createElement('div')
    modalHeader.className = 'modal__header'

    // Create Info Title
    const infoTitle = document.createElement('div')
    infoTitle.className = 'info__title'
    infoTitle.textContent = `${pick.name}`

    // Create Info Description
    const infoDescr = document.createElement('div')
    infoDescr.className = 'info__descr'
    infoDescr.textContent = `${pick.description}`

    modalHeader.append(infoTitle, infoDescr)

    // !!! CONTROLS

    let basePrice = pick.price
    console.log(basePrice)
    let sizePrice = 0
    let addPrice = 0
    let totalPrice = 0

    const sizeControlsContainer = document.createElement('div')
    sizeControlsContainer.className = 'modal__buttons'

    Object.values(pick.sizes).forEach((sizeData, index) => {
        const sizes = ['S', 'M', 'L']
        const buttonText = `${sizeData.size}`
        const button = secondaryButton(
            sizes[index],
            buttonText,
            'modal__button modal__button--size'
        )

        if (index === 0) {
            button.classList.add('modal__button--active')
        }

        button.dataset.dataprice = `$${sizeData['add-price']}`

        button.addEventListener('click', () => {
            document.querySelectorAll('.modal__button--size').forEach((otherButton) => {
                otherButton.classList.remove('modal__button--active')
            })
            button.classList.add('modal__button--active')

            sizePrice = +button.dataset.dataprice.slice(1)
            totalPrice = (+basePrice + +sizePrice + +addPrice).toFixed(2)
            console.log(totalPrice, sizePrice, addPrice)

            priceValue.textContent = `$${totalPrice}`
        })

        sizeControlsContainer.append(button)
    })

    const sizeModalTitle = document.createElement('div')
    sizeModalTitle.textContent = 'Size'
    sizeModalTitle.className = 'controls__title'

    const addControlsContainer = document.createElement('div')
    addControlsContainer.className = 'modal__buttons'

    Object.values(pick.additives).forEach((addData, index) => {
        const buttonText = `${addData.name}`
        const button = secondaryButton(index + 1, buttonText, 'modal__button')
        button.dataset.dataprice = `$${addData['add-price']}`

        button.addEventListener('click', () => {
            if (button.classList.contains('modal__button--active')) {
                addPrice -= +button.dataset.dataprice.slice(1)
            } else {
                addPrice += +button.dataset.dataprice.slice(1)
            }

            button.classList.toggle('modal__button--active')

            totalPrice = (+basePrice + +sizePrice + +addPrice).toFixed(2)
            console.log(totalPrice, sizePrice, addPrice)

            priceValue.textContent = `$${totalPrice}`
        })

        addControlsContainer.append(button)
    })

    const addModalTitle = document.createElement('div')
    addModalTitle.textContent = 'Additives'
    addModalTitle.className = 'controls__title'

    // Create Modal Price
    const modalPrice = document.createElement('div')
    modalPrice.className = 'modal__price'

    // Create Price Title
    const priceTitle = document.createElement('div')
    priceTitle.className = 'price__title'
    priceTitle.textContent = 'Total'

    // Create Price Value
    const priceValue = document.createElement('div')
    priceValue.className = 'price__value'
    priceValue.textContent = `$${pick.price}`

    modalPrice.append(priceTitle, priceValue)

    // Create Modal Disclaimer
    const modalDisclaimer = document.createElement('div')
    modalDisclaimer.className = 'modal__disclaimer'

    // Create Disclaimer Icon
    const disclaimerIcon = document.createElement('img')
    disclaimerIcon.src = './assets/img/icons/info-empty.svg'
    disclaimerIcon.alt = ''
    disclaimerIcon.className = 'disclaimer__icon'

    // Create Disclaimer Text
    const disclaimerText = document.createElement('div')
    disclaimerText.className = 'disclaimer__text'
    disclaimerText.textContent =
        'The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.'

    modalDisclaimer.append(disclaimerIcon, disclaimerText)

    // Create Close Button
    const modalCloseButton = document.createElement('button')
    modalCloseButton.className = 'modal__close-button'
    modalCloseButton.textContent = 'Close'

    modalCloseButton.addEventListener('click', () => {
        modalContainer.remove()
    })

    // Append elements to the DOM
    modalInfo.append(
        modalHeader,
        sizeModalTitle,
        sizeControlsContainer,
        addModalTitle,
        addControlsContainer,
        modalPrice,
        modalDisclaimer,
        modalCloseButton
    )
    modalWindow.append(modalImgBox, modalInfo)
    modalContainer.append(modalWindow)

    // Append the modalContainer to the body or any other desired container
    return modalContainer
}
