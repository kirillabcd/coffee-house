import { productCard } from '../components/productCard.js'
import { loaderButton } from '../components/loaderButton.js'
const cards = () => document.querySelector('.cards')
const menu = () => document.querySelector('.menu')
let pick

export const buildCards = async (category) => {
    const data = await getData()
    pick = await data.filter((el) => el.category === category)

    cards().innerHTML = ''

    if (document.querySelector('.loader-button')) {
        menu().removeChild(document.querySelector('.loader-button'))
    }

    if (pick.length > 4 && window.innerWidth <= 768) {
        pick.slice(0, 4).map((el) => {
            const card = productCard(el)
            cards().append(card)
        })
        menu().append(loaderButton())
    } else {
        pick.map((el) => {
            const card = productCard(el)
            cards().append(card)
        })
    }
}

export function buildMoreCards() {
    if (pick.length > 4 && window.innerWidth <= 768) {
        pick.slice(4, pick.length).map((el) => {
            const card = productCard(el)
            cards().append(card)
        })
        menu().removeChild(document.querySelector('.loader-button'))
    }
}

export async function getData() {
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
