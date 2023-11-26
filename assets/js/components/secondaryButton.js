export const secondaryButton = (decorContent, text, buttonClass) => {
    const button = document.createElement('button')
    button.className = `${buttonClass}`
    button.textContent = `${text}`
    const buttonDecor = document.createElement('span')
    buttonDecor.className = 'button__decor'
    buttonDecor.textContent = `${decorContent}`
    button.prepend(buttonDecor)

    return button
}
