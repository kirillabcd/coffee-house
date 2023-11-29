import mainPage from '../pages/mainPage.js'
import menu from '../pages/menu.js'

const app = document.querySelector('.main')

const routes = {
    '/coffee-house': { render: mainPage },
    '/coffee-house/menu': { render: menu },
}

export function router() {
    let view = routes[location.pathname]

    if (view) {
        app.innerHTML = ''
        app.append(view.render())
    } else {
        history.replaceState('', '', '/')
        router()
    }
}

export function directRouter(section) {
    let target = `/${section}`
    history.pushState('', '', target)
    router()
}
