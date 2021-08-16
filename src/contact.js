console.log('Hello from the contact');

function contactLoad() {
    const contactContainer = document.createElement('div');
    homeContent.classList.add('container');
    homeContent.classList.add('contact-container');

    return contactContainer;
}

export { contactLoad };