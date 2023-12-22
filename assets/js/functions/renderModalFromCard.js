import { clearPriceCalculation } from './handleModal.js'

const modal = document.querySelector('.modal')

export async function renderModalFromCard(targetData) {
    buildModal(targetData)
    showModal()
}

const showModal = () => {
    modal.classList.add('modal--visible')
    document.body.classList.toggle('lock-scroll')
}

const buildModal = async (targetData) => {
    const title = document.querySelector('.info__title')
    const descr = document.querySelector('.info__descr')
    const photo = document.querySelector('.modal__img')
    const priceValue = document.querySelector('.price__value')
    const sizeButtons = document.querySelectorAll('.size-button')
    const addButtons = document.querySelectorAll('.add-button')

    const sizeButtonsInnerText = document.querySelectorAll('.size-button__text')
    const addButtonsInnerText = document.querySelectorAll('.add-button__text')

    const data = await getData()
    const pick = await data.filter((el) => el.name === targetData)[0]

    title.textContent = pick.name
    descr.textContent = pick.description
    photo.src = pick.photo

    priceValue.textContent = `$${pick.price}`
    priceValue.dataset.dataprice = pick.price

    sizeButtonsInnerText.forEach((button, index) => {
        button.textContent = Object.values(pick.sizes)[index].size
    })

    sizeButtons.forEach((button, index) => {
        button.dataset.dataprice = Object.values(pick.sizes)[index]['add-price']

        button.classList.remove('secondary-button--active')
        button.classList.remove('size-button--active')

        if (index === 0) {
            button.classList.add('secondary-button--active')
            button.classList.add('size-button--active')
        }
    })

    addButtonsInnerText.forEach((button, index) => {
        button.textContent = Object.values(pick.additives)[index].name
    })

    addButtons.forEach((button, index) => {
        button.dataset.dataprice = Object.values(pick.additives)[index]['add-price']

        button.classList.remove('secondary-button--active')
        button.classList.remove('add-button--active')
    })

    clearPriceCalculation()
}

async function getData() {
    return fetch('./assets/data/products.json')
        .then((response) => response.json())
        .then((data) => {
            return data
        })
        .catch((error) => {
            console.error('Error fetching JSON:', error)
            throw error
        })
}
