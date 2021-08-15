function pageLoad() {
    const content = document.querySelector('.content');
    const heading = document.createElement('h1');
    heading.textContent = 'Burgers, Tacos and Pizza';

    const emph = document.createElement('i');
    emph.textContent = 'really';

    const text1 = document.createElement('p');
    text1.textContent = 'We know what you ' + emph + ' want to eat... ';

    const text2 = document.createElement('p');
    text2.textContent = 'Come get fat with us! We promise you will leave regreting your every decision!';

    const imageContainer = document.createElement('div');

    const burgerImage = document.createElement('img');
    burgerImage.src = './burger.jpg';
    burgerImage.alt = 'burger-image';
    burgerImage.width = '25%';
    imageContainer.appendChild(burgerImage);
    
    const tacosImage = document.createElement('img');
    tacosImage.src = './tacos.jpeg';
    tacosImage.alt = 'tacos-image';
    tacosImage.alt = 'tacos-image';
    tacosImage.width = '50%';
    imageContainer.appendChild(tacosImage);
    
    const pizzaImage = document.createElement('img');
    pizzaImage.src = './pizza.jpg';
    pizzaImage.alt = 'pizza-image';
    pizzaImage.width = '75%';
    imageContainer.appendChild(pizzaImage);

    content.appendChild(heading);
    content.appendChild(text1);
    content.appendChild(text2);
    content.appendChild(imageContainer);
}