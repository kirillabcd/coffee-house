import { productCard } from '../components/productCard.js'
const cards = () => document.querySelector('.cards')

export const buildCards = async (category) => {
    const data = await getData()
    const pick = await data.filter((el) => el.category === category)

    cards().innerHTML = ''

    if (pick.length > 4 && window.innerWidth <= 768) {
        pick.slice(0, 4).map((el) => {
            const card = productCard(el)
            cards().append(card)
        })
        // menu.append(newLoaderButton)
    } else {
        pick.map((el) => {
            const card = productCard(el)
            cards().append(card)
        })
    }
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
