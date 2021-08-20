
import burger from '../img/burger.jpg';
import tacos from '../img/tacos.jpeg';
import pizza from '../img/pizza.jpg';

function menuLoad() {
    const menuContent = document.createElement('div');
    menuContent.classList.add('container');
    menuContent.classList.add('menu-container');

    const heading = document.createElement('h1');
    heading.textContent = 'Menu';
    menuContent.appendChild(heading);

    function createMenuItem(itemName, image, description, price) {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');

        const itemHeading = document.createElement('h2');
        itemHeading.classList.add('item-heading');
        itemHeading.textContent = itemName;

        const itemImage = new Image();
        itemImage.classList.add('item-image');
        itemImage.src = image;
        itemImage.alt = `${itemName}-image`;
        itemImage.setAttribute('width', '100%');

        const itemDescription = document.createElement('p');
        itemDescription.classList.add('item-description');
        itemDescription.textContent = description;

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = price;

        itemContainer.appendChild(itemHeading);
        itemContainer.appendChild(itemImage);
        itemContainer.appendChild(itemDescription);
        itemContainer.appendChild(itemPrice);

        return itemContainer;
    }

    const burgerMenuItem = createMenuItem('Burgers', burger, 'Burgers are awesome! I love burgers!', '$9.95');
    const tacoMenuItem = createMenuItem('Tacos', tacos, 'Tacos are awesome! I love tacos!', '$7.95');
    const pizzaMenuItem = createMenuItem('Pizza', pizza, 'Pizza is awesome! I love pizza!', '$15.95');

    menuContent.appendChild(burgerMenuItem);
    menuContent.appendChild(tacoMenuItem);
    menuContent.appendChild(pizzaMenuItem);
    
    return menuContent;
}

export { menuLoad };