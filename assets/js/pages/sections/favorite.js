import { nextButton } from '../../components/nextButtonSlider.js'
import { prevButton } from '../../components/PrevButtonSlider.js'
import { controlsSlider } from '../../components/controlsSlider.js'
import { sliderRow } from '../../components/sliderRow.js'

// generated with GPT base on html markdown

export const favoriteSection = () => {
    // Function to create an SVG element
    function createSvgElement() {
        const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        svgElement.setAttribute('width', '24')
        svgElement.setAttribute('height', '24')
        svgElement.setAttribute('viewBox', '0 0 24 24')
        svgElement.setAttribute('fill', 'none')
        svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg')

        const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        pathElement.setAttribute('d', 'M18.5 12H6M6 12L12 6M6 12L12 18')
        pathElement.setAttribute('stroke', '#403F3D')
        pathElement.setAttribute('stroke-linecap', 'round')
        pathElement.setAttribute('stroke-linejoin', 'round')

        svgElement.appendChild(pathElement)

        return svgElement
    }

    // Create the section
    const favoriteCoffeeSection = document.createElement('section')
    favoriteCoffeeSection.classList.add('favorite-coffee')
    favoriteCoffeeSection.id = 'favorite'

    // Create the container
    const containerDiv = document.createElement('div')
    containerDiv.classList.add('container')

    // Create the title
    const titleH2Div = document.createElement('div')
    titleH2Div.classList.add('title-h2', 'favorite-coffee__title-h2')
    titleH2Div.textContent = 'Choose your '
    const accentTextSpan = document.createElement('span')
    accentTextSpan.classList.add('accent-text')
    accentTextSpan.textContent = 'favorite'
    titleH2Div.appendChild(accentTextSpan)
    titleH2Div.innerHTML += ' coffee'

    // Create the slider block
    const sliderDiv = document.createElement('div')
    sliderDiv.classList.add('slider')

    // Create the "previous" button

    const newPrevButton = prevButton()

    const prevSvgElement = createSvgElement()
    newPrevButton.appendChild(prevSvgElement)

    // Create the block for slides
    const sliderBodyDiv = document.createElement('div')
    sliderBodyDiv.classList.add('slider__body')

    // Create the slider window
    const sliderWindowDiv = document.createElement('div')
    sliderWindowDiv.classList.add('slider__window')

    // Create the slider row
    // const sliderRowDiv = document.createElement('div')
    // sliderRowDiv.classList.add('slider__slider-row')

    const newSliderRow = sliderRow()

    // Create slides
    for (let i = 1; i <= 3; i++) {
        const slideDiv = document.createElement('div')
        slideDiv.classList.add('slider__slide')

        const imgElement = document.createElement('img')
        imgElement.src = `./assets/img/coffee-slider/coffee-slider-${i}.png`
        imgElement.alt = 'slide'
        imgElement.classList.add('slider__image')

        const slideInfoDiv = document.createElement('div')
        slideInfoDiv.classList.add('slider__slide-info')

        // Add information about the slide
        const itemNameDiv = document.createElement('div')
        itemNameDiv.classList.add('slider-info__item-name')

        const itemDescriptionDiv = document.createElement('div')
        itemDescriptionDiv.classList.add('slider-info__item-description')

        const itemPriceDiv = document.createElement('div')
        itemPriceDiv.classList.add('slider-info__item-price')

        // Set text content for each slide
        switch (i) {
            case 1:
                itemNameDiv.textContent = "S'mores Frappuccino"
                itemDescriptionDiv.textContent =
                    'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.'
                itemPriceDiv.textContent = '$5.50'
                break
            case 2:
                itemNameDiv.textContent = 'Caramel Macchiato'
                itemDescriptionDiv.textContent =
                    'Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.'
                itemPriceDiv.textContent = '$5.00'
                break
            case 3:
                itemNameDiv.textContent = 'Ice Coffee'
                itemDescriptionDiv.textContent =
                    'A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.'
                itemPriceDiv.textContent = '$4.50'
                break
            default:
                break
        }

        slideInfoDiv.appendChild(itemNameDiv)
        slideInfoDiv.appendChild(itemDescriptionDiv)
        slideInfoDiv.appendChild(itemPriceDiv)

        // Append slide elements to the slide div
        slideDiv.appendChild(imgElement)
        slideDiv.appendChild(slideInfoDiv)

        // Append the slide div to the slider row
        newSliderRow.appendChild(slideDiv)
    }

    // Append the slider row to the slider window
    sliderWindowDiv.appendChild(newSliderRow)

    // Create the "next" button
    const newNextButton = nextButton()
    const nextSvgElement = createSvgElement()
    newNextButton.appendChild(nextSvgElement)

    // Append all created elements to the DOM
    sliderBodyDiv.appendChild(sliderWindowDiv)
    sliderBodyDiv.appendChild(controlsSlider())
    sliderDiv.appendChild(newPrevButton)
    sliderDiv.appendChild(sliderBodyDiv)
    sliderDiv.appendChild(newNextButton)
    containerDiv.appendChild(titleH2Div)
    containerDiv.appendChild(sliderDiv)
    favoriteCoffeeSection.appendChild(containerDiv)

    return favoriteCoffeeSection
}
