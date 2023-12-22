import { buildCards } from './buildCard.js'
export const container = document.querySelector('.menu__menu-items')

export const renderCards = async (category) => {
    const loaderButton = document.querySelector('.loader-button')
    let cards = await buildCards(category)

    if (cards.length > 4 && window.innerWidth <= 768) {
        cards = cards.slice(0, 4)
        loaderButton.classList.add('loader-button--visible')
    } else {
        loaderButton.classList.remove('loader-button--visible')
    }

    fadeOutCard()
    container.addEventListener('transitionend', fadeInCard)

    container.addEventListener('transitionend', () => {
        container.removeEventListener('transitionend', fadeInCard)
    })

    function fadeOutCard() {
        container.classList.add('menu__menu-items--hidden')
    }

    function fadeInCard() {
        container.innerHTML = ''
        container.append(...cards)
        container.classList.remove('menu__menu-items--hidden')
    }
}
