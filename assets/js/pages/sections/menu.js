import { menuTabs } from '../../components/menuTabs.js'

export const menuSection = () => {
    const newSection = document.createElement('section')
    newSection.className = 'menu'

    const container = document.createElement('div')
    container.className = 'container'

    const h1Item = document.createElement('h1')
    h1Item.className = 'title-h1 menu__title-h1'
    h1Item.textContent = 'Behind each of our cups hides an '

    const accentText = document.createElement('span')
    accentText.className = 'accent-text'
    accentText.textContent = 'amazing surprise'

    const cards = document.createElement('div')
    cards.className = 'cards'

    h1Item.append(accentText)
    container.append(h1Item, menuTabs(), cards)
    newSection.append(container)

    return newSection
}
