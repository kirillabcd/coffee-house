export const aboutSection = () => {
    // Create the about section
    const aboutSection = document.createElement('section')
    aboutSection.classList.add('about')
    aboutSection.id = 'about'

    // Create the container div
    const containerDiv = document.createElement('div')
    containerDiv.classList.add('container')

    // Create the title heading
    const titleH2 = document.createElement('h2')
    titleH2.classList.add('title-h2', 'about__title-h2')
    titleH2.innerHTML =
        'Resource is <span class="accent-text">the perfect and cozy place</span> where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.'

    // Create the image board div
    const imageBoardDiv = document.createElement('div')
    imageBoardDiv.classList.add('image-board')

    // Create the left side of the image board
    const leftSideDiv = document.createElement('div')
    leftSideDiv.classList.add('image-board__left-side')

    // Create the big image container
    const bigImageContainerDiv = document.createElement('div')
    bigImageContainerDiv.classList.add('image-board__image-container--big')
    const bigImage = document.createElement('img')
    bigImage.src = './assets/img/about/about-1.jpg'
    bigImage.alt = 'photo'
    bigImageContainerDiv.appendChild(bigImage)

    // Create the small image container
    const smallImageContainerDiv = document.createElement('div')
    smallImageContainerDiv.classList.add('image-board__image-container--small')
    const smallImage = document.createElement('img')
    smallImage.src = './assets/img/about/about-2.jpg'
    smallImage.alt = 'photo'
    smallImageContainerDiv.appendChild(smallImage)

    // Append big and small image containers to the left side
    leftSideDiv.append(bigImageContainerDiv, smallImageContainerDiv)

    // Create the right side of the image board
    const rightSideDiv = document.createElement('div')
    rightSideDiv.classList.add('image-board__right-side')

    // Create the small image container for the right side
    const smallImageContainerRightDiv = document.createElement('div')
    smallImageContainerRightDiv.classList.add('image-board__image-container--small')
    const smallImageRight = document.createElement('img')
    smallImageRight.src = './assets/img/about/about-3.jpg'
    smallImageRight.alt = 'photo'
    smallImageContainerRightDiv.appendChild(smallImageRight)

    // Create the big image container for the right side
    const bigImageContainerRightDiv = document.createElement('div')
    bigImageContainerRightDiv.classList.add('image-board__image-container--big')
    const bigImageRight = document.createElement('img')
    bigImageRight.src = './assets/img/about/about-4.jpg'
    bigImageRight.alt = 'photo'
    bigImageContainerRightDiv.appendChild(bigImageRight)

    // Append small and big image containers to the right side
    rightSideDiv.append(smallImageContainerRightDiv, bigImageContainerRightDiv)

    // Append title and image board to the container
    imageBoardDiv.append(leftSideDiv, rightSideDiv)

    // Append container and image board to the section
    containerDiv.append(titleH2, imageBoardDiv)
    aboutSection.appendChild(containerDiv)

    // Append the section to the body
    return aboutSection
}
