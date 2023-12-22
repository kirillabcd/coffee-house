export const menuControls = document.querySelectorAll('.menu-control')

export const handleMenuControls = (clickedControl) => {
    menuControls.forEach((control) => control.classList.remove('secondary-button--active'))
    clickedControl.classList.add('secondary-button--active')
}
