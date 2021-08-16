import './css/style.min.css';
import { pageLoad } from "./js/page-load.js";
import { menuLoad } from "./js/menu.js";
import { contactLoad } from "./js/contact.js";

const content = document.querySelector('#content');

const navbar = document.createElement('nav');

const homeBtn = document.createElement('p');
homeBtn.textContent = 'Home';
navbar.appendChild(homeBtn);

const menuBtn = document.createElement('p');
menuBtn.textContent = 'Menu';
navbar.appendChild(menuBtn);
navbar.appendChild(menuBtn);

const contactBtn = document.createElement('p');
contactBtn.textContent = 'Contact';
navbar.appendChild(contactBtn);

document.body.insertBefore(navbar, content);

let container = pageLoad();

content.appendChild(container);