// button leads to menu page
import { primaryButton } from '../../components/primaryButton.js'

// generated with GPT base on html markdown

export const heroSection = () => {
    // Create a section HERO !!!
    const heroSection = document.createElement('section')
    heroSection.classList.add('hero')
    heroSection.id = 'hero'

    // Create a container
    const containerDiv = document.createElement('div')
    containerDiv.classList.add('container')

    // Create the main hero__box block
    const heroBoxDiv = document.createElement('div')
    heroBoxDiv.classList.add('hero__box')

    // Create a video element
    const videoElement = document.createElement('video')
    videoElement.classList.add('hero__video')
    videoElement.autoplay = true
    videoElement.muted = true
    videoElement.loop = true
    // videoElement.playsinline = true

    // Create a poster for the video
    const videoPoster = document.createElement('img')
    videoPoster.src = '/assets/img/other/img-hero.jpg'
    videoPoster.alt = 'Hero Image Poster'

    // Create a source element for the video
    const videoSource = document.createElement('source')
    videoSource.src = '../../../video/video.mp4'
    videoSource.type = 'video/mp4'

    // Add the poster and source to the video element
    videoElement.append(videoPoster, videoSource)

    // Create the hero__content block
    const heroContentDiv = document.createElement('div')
    heroContentDiv.classList.add('hero__content')

    // Create an h1 heading
    const h1Element = document.createElement('h1')
    h1Element.classList.add('offer')

    // Create a span with the class accent-text
    const accentTextSpan = document.createElement('span')
    accentTextSpan.classList.add('accent-text')
    accentTextSpan.textContent = 'Enjoy'

    // Create a text node with the content of the heading
    const offerText = document.createTextNode(' premium coffee at our charming cafe')

    // Add the span and text node to the h1 heading
    h1Element.append(accentTextSpan, offerText)

    // Create a paragraph with the class hero__description
    const pElement = document.createElement('p')
    pElement.classList.add('hero__description')
    pElement.textContent =
        'With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.'

    // Create a wrapper for the button
    const buttonWrapperDiv = document.createElement('div')
    buttonWrapperDiv.classList.add('button-wrapper')

    //Add the button to the wrapper
    buttonWrapperDiv.append(primaryButton())

    // Add all created elements to the DOM
    heroContentDiv.append(h1Element, pElement, buttonWrapperDiv)

    heroBoxDiv.append(videoElement, heroContentDiv)

    containerDiv.append(heroBoxDiv)

    heroSection.append(containerDiv)

    return heroSection
}
