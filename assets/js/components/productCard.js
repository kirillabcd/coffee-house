import { renderModalFromCard } from '../functions/renderModalFromCard.js'

export const productCard = (item) => {
    const menuItem = document.createElement('li')
    menuItem.className = 'menu-item'
    menuItem.dataset.dataname = `${item.name}`

    menuItem.addEventListener('click', (event) => {
        const targetData = event.currentTarget.dataset.dataname
        renderModalFromCard(targetData)
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

/* <div class='menu-item'>
    <div class='menu-item__body'>
        <div class='menu-item__img-container'>
            <img src='./img/coffee/coffee-1.png' alt='' class='menu-item__img' />
        </div>
        <div class='menu-item__info-container'>
            <div class='menu-item__info'>
                <div class='menu-item__title'>Irish coffee</div>
                <div class='menu-item__description'>
                    Fragrant black coffee with Jameson Irish whiskey and whipped milk
                </div>
            </div>
            <div class='menu-item__price'>$7.00</div>
        </div>
    </div>
</div> */
