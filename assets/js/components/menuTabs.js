import { secondaryButton } from './secondaryButton.js'
import { buildCards } from '../functions/buildCards.js'

export const menuTabs = () => {
    const tabs = document.createElement('div')
    tabs.className = 'tabs'

    const coffeeButton = secondaryButton('☕', 'Coffee', 'tabs__button tabs__button--coffee')
    coffeeButton.dataset.category = 'coffee'

    const teaButton = secondaryButton('🫖', 'Tea', 'tabs__button tabs__button--tea')
    teaButton.dataset.category = 'tea'

    const dessertButton = secondaryButton('🍰', 'Dessert', 'tabs__button tabs__button--dessert')
    dessertButton.dataset.category = 'dessert'

    tabs.append(coffeeButton, teaButton, dessertButton)

    coffeeButton.addEventListener('click', () => {
        buildCards(coffeeButton.dataset.category)
        coffeeButton.classList.add('tabs__button--active')
        teaButton.classList.remove('tabs__button--active')
        dessertButton.classList.remove('tabs__button--active')
    })

    teaButton.addEventListener('click', () => {
        buildCards(teaButton.dataset.category)
        teaButton.classList.add('tabs__button--active')
        coffeeButton.classList.remove('tabs__button--active')
        dessertButton.classList.remove('tabs__button--active')
    })

    dessertButton.addEventListener('click', () => {
        buildCards(dessertButton.dataset.category)
        dessertButton.classList.add('tabs__button--active')
        teaButton.classList.remove('tabs__button--active')
        coffeeButton.classList.remove('tabs__button--active')
    })

    return tabs
}
