import { appStoreButton } from '../../components/appStoreButton.js'
import { googlePlayButton } from '../../components/googlePlayButton.js'

export const mobileAppSection = () => {
    // Create a new section
    const newSection = document.createElement('section')
    newSection.classList.add('mobile-app')
    newSection.id = 'mobile-app'

    // Create a container
    const container = document.createElement('div')
    container.classList.add('container')

    // Create the mobile-app__box block
    const mobileAppBox = document.createElement('div')
    mobileAppBox.classList.add('mobile-app__box')

    // Create the mobile-app__download block
    const mobileAppDownload = document.createElement('div')
    mobileAppDownload.classList.add('mobile-app__download')

    // Create the h2 title
    const titleH2 = document.createElement('h2')
    titleH2.classList.add('title-h2', 'mobile-app__title-h2')

    // Create the accent text
    const accentText = document.createElement('span')
    accentText.classList.add('accent-text')
    accentText.textContent = 'Download'

    // Add text to the h2 title
    titleH2.append(accentText, document.createTextNode(' our apps to start ordering'))

    // Create the mobile-app__description block
    const mobileAppDescription = document.createElement('div')
    mobileAppDescription.classList.add('mobile-app__description')
    mobileAppDescription.textContent =
        'Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are'

    // Create the mobile-app__download-buttons block
    const downloadButtons = document.createElement('div')
    downloadButtons.classList.add('mobile-app__download-buttons')

    // Create two buttons (mobile-app__download-button)
    const downloadButton1 = document.createElement('div')
    downloadButton1.classList.add('mobile-app__download-button')
    downloadButton1.innerHTML = `${appStoreButton}`

    const downloadButton2 = document.createElement('div')
    downloadButton2.classList.add('mobile-app__download-button')
    downloadButton2.innerHTML = `${googlePlayButton}`

    // Create the mobile-app__image block
    const mobileAppImage = document.createElement('div')
    mobileAppImage.classList.add('mobile-app__image')

    // Create the image
    const image = document.createElement('img')
    image.src = './assets/img/other/mobile-screens.png'
    image.alt = 'mobile-app'
    image.classList.add('mobile-app__img')

    // Use the append method to add elements
    newSection.append(container)
    container.append(mobileAppBox)
    mobileAppBox.append(mobileAppDownload)
    mobileAppDownload.append(titleH2, mobileAppDescription, downloadButtons)
    downloadButtons.append(downloadButton1, downloadButton2)
    mobileAppBox.append(mobileAppImage)
    mobileAppImage.append(image)

    // Add the new section to the end of the body
    return newSection
}
