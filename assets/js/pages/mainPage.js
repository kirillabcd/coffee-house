import { heroSection } from './sections/hero.js'
import { favoriteSection } from './sections/favorite.js'

export default () => {
    const page = document.createElement('page')
    page.append(heroSection(), favoriteSection())

    return page
}
