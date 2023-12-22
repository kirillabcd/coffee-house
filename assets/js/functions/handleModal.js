export const sizeButtons = document.querySelectorAll('.size-button')
export const addButtons = document.querySelectorAll('.add-button')
export const activeSizeButton = () => document.querySelector('.size-button--active')

const priceValue = document.querySelector('.price__value')

let price = 0
let sizePrice = 0
let addPrice = 0
const totalPrice = () => price + sizePrice + addPrice

export const handleSizeButtons = (button) => {
    activeSizeButton().classList.remove('secondary-button--active')
    activeSizeButton().classList.remove('size-button--active')
    button.classList.add('size-button--active')
    button.classList.add('secondary-button--active')

    updatePrice(button)
}

export const handleAddButtons = (button) => {
    button.classList.toggle('add-button--active')
    button.classList.toggle('secondary-button--active')

    updatePrice(button)
}

const updatePrice = (button) => {
    price = +priceValue.dataset.dataprice
    if (button.classList.contains('size-button--active')) {
        sizePrice = +button.dataset.dataprice
    }

    if (button.classList.contains('add-button--active')) {
        sizePrice += +button.dataset.dataprice
    }

    if (
        !button.classList.contains('add-button--active') &&
        button.classList.contains('add-button')
    ) {
        sizePrice -= +button.dataset.dataprice
    }

    priceValue.textContent = `$${totalPrice().toFixed(2)}`
}

export const clearPriceCalculation = () => {
    price = 0
    sizePrice = 0
    addPrice = 0
}
