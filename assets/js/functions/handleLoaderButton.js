export const loaderButton = document.querySelector('.loader-button')

import { buildCards } from './buildCard.js'
export const handleLoaderButton = async (category) => {
    const container = document.querySelector('.menu__menu-items')

    const cards = await buildCards(category)
    const otherCards = cards.slice(4, cards.length)

    container.append(...otherCards)
    loaderButton.classList.remove('loader-button--visible')
}
