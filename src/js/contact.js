
function contactLoad() {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('container');
    contactContainer.classList.add('contact-container');
    // contactContainer.textContent = 'this is the contact';



    const addressContainer = document.createElement('div');
    addressContainer.classList.add('address-container');

    const addressName = document.createElement('h2');
    addressName.classList.add('address-name');
    addressName.textContent = 'Burgers, Tacos and Pizza';
    addressContainer.appendChild(addressName);
    
    const addressLine1 = document.createElement('p');
    addressLine1.classList.add('address-line1');
    addressLine1.textContent = `123 Fake St`;
    addressContainer.appendChild(addressLine1);

    const addressLine2 = document.createElement('p');
    addressLine2.classList.add('address-line1');
    addressLine2.textContent = `Nowhere, USA 01010`;
    addressContainer.appendChild(addressLine2);

    contactContainer.appendChild(addressContainer);




    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('hours-container');

    const hoursHeader = document.createElement('h2');
    hoursHeader.classList.add('hours-header');
    hoursHeader.textContent = 'Hours';
    hoursContainer.appendChild(hoursHeader);

    function createDay(day) {
        const hours = document.createElement('p');
        hours.classList.add('hours');
        hours.classList.add(`hours-${day}`);
        hours.textContent = `${day}: ${day === 'Fri' || day === 'Sat' ? '10am - 1am' : '11am - 11pm'}`;
        hoursContainer.appendChild(hours);
    }

    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];

    for (let i = 0; i < 7; i++) {
        createDay(days[i]);
    }

    contactContainer.appendChild(hoursContainer);



    const phoneEmailContainer = document.createElement('div');
    phoneEmailContainer.classList.add('phoneEmail-container');

    const phone = document.createElement('p');
    phone.classList.add('phone');
    phone.textContent = 'Phone: 123-456-7890';
    phoneEmailContainer.appendChild(phone);
    
    const email = document.createElement('p');
    email.classList.add('email');
    email.textContent = 'Email: bossman@btp.com';
    phoneEmailContainer.appendChild(email);

    contactContainer.appendChild(phoneEmailContainer);

    return contactContainer;
}

export { contactLoad };