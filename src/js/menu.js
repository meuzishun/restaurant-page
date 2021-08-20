
function menuLoad() {
    const menuContent = document.createElement('div');
    menuContent.classList.add('container');
    menuContent.classList.add('menu-container');
    menuContent.textContent = 'This is the menu';

    return menuContent;
}

export { menuLoad };