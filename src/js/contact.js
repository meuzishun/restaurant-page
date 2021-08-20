
function contactLoad() {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('container');
    contactContainer.classList.add('contact-container');
    contactContainer.textContent = 'this is the contact';

    return contactContainer;
}

export { contactLoad };