import { menuSection } from './sections/menu.js'

export default () => {
    const page = document.createElement('div')
    page.append(menuSection())
    return page
}
