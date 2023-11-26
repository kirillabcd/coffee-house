import { heroSection } from './sections/hero.js'
import { favoriteSection } from './sections/favorite.js'
import { aboutSection } from './sections/about.js'
import { mobileAppSection } from './sections/mobile-app.js'

export default () => {
    const page = document.createElement('page')
    page.append(heroSection(), favoriteSection(), aboutSection(), mobileAppSection())

    return page
}
