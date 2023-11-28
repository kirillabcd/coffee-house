import { modal } from './modal.js'

export const productCard = (item) => {
    const menuItem = document.createElement('div')
    menuItem.className = 'menu-item'
    menuItem.dataset.dataname = `${item.name}`

    menuItem.addEventListener('click', async () => {
        const dataName = menuItem.dataset.dataname
        const newModal = await modal(dataName)
        newModal.dataset.dataname = `${dataName}`
        document.body.prepend(newModal)
    })

    const menuItemBody = document.createElement('div')
    menuItemBody.className = 'menu-item__body'

    const imgContainer = document.createElement('div')
    imgContainer.className = 'menu-item__img-container'

    const cardImage = document.createElement('img')
    const imageUrl = item.photo
    cardImage.src = imageUrl
    cardImage.alt = 'photo'
    cardImage.className = 'menu-item__img'

    const infoContainer = document.createElement('div')
    infoContainer.className = 'menu-item__info-container'

    const itemInfo = document.createElement('div')
    itemInfo.className = 'menu-item__info'

    const itemTitle = document.createElement('div')
    itemTitle.className = 'menu-item__title'
    itemTitle.textContent = `${item.name}`

    const itemDescription = document.createElement('div')
    itemDescription.className = 'menu-item__description'
    itemDescription.textContent = `${item.description}`

    const itemPrice = document.createElement('div')
    itemPrice.className = 'menu-item__price'
    itemPrice.textContent = `$${item.price}`

    imgContainer.append(cardImage)

    itemInfo.append(itemTitle, itemDescription)
    infoContainer.append(itemInfo, itemPrice)

    menuItemBody.append(imgContainer, infoContainer)

    menuItem.append(menuItemBody)

    return menuItem
}
