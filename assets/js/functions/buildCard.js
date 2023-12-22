import { productCard } from '../components/productCard.js'

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

// Build cards items

export async function buildCards(category) {
    const data = await getData()
    const pick = data.filter((el) => el.category === category)
    const cards = pick.map((el) => productCard(el))
    return cards
}
