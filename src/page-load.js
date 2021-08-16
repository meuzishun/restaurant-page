console.log('Hello from the otherside');

function pageLoad() {
    const homeContent = document.createElement('div');
    homeContent.classList.add('container');
    homeContent.classList.add('home-container');

    const heading = document.createElement('h1');
    heading.textContent = 'Burgers, Tacos and Pizza';

    const text1 = document.createElement('p');
    text1.textContent = 'We know what you really want to eat... ';

    const text2 = document.createElement('p');
    text2.textContent = 'Come get fat with us! We promise that you will leave regretting every decision!';

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const burgerImage = document.createElement('img');
    burgerImage.src = './burger.jpg';
    burgerImage.alt = 'burger-image';
    burgerImage.setAttribute('width', '25%');
    imageContainer.appendChild(burgerImage);
    
    const tacosImage = document.createElement('img');
    tacosImage.src = './tacos.jpeg';
    tacosImage.alt = 'tacos-image';
    tacosImage.alt = 'tacos-image';
    tacosImage.setAttribute('width', '50%');
    imageContainer.appendChild(tacosImage);
    
    const pizzaImage = document.createElement('img');
    pizzaImage.src = './pizza.jpg';
    pizzaImage.alt = 'pizza-image';
    pizzaImage.setAttribute('width', '75%');
    imageContainer.appendChild(pizzaImage);

    homeContent.appendChild(heading);
    homeContent.appendChild(text1);
    homeContent.appendChild(text2);
    homeContent.appendChild(imageContainer);

    return homeContent;
}

export { pageLoad };