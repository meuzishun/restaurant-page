import './css/style.min.css';
import { pageLoad } from "./js/page-load.js";
import { menuLoad } from "./js/menu.js";
import { contactLoad } from "./js/contact.js";

const content = document.querySelector('#content');
const navbar = document.createElement('nav');
navbar.addEventListener('click', handleNavbtnClick);

function changeContent(e) {
    const oldContainer = content.querySelector('.container');
    if (oldContainer) {
        content.removeChild(oldContainer);
    }
    const newContainer = e.target.callback();
    content.appendChild(newContainer);
}

function addSelectedColor(e) {
    navbar.querySelectorAll('p').forEach(btn => {
        if (btn.classList.contains('selected')) {
            btn.classList.remove('selected');
        }
    });
    e.target.classList.add('selected');
}

function handleNavbtnClick(e) {
    if (e.target.matches('p')) {
        changeContent(e);
        addSelectedColor(e);
    }
}

function createNavBtn(elem, text, cb) {
    const navBtn = document.createElement(elem);
    navBtn.textContent = text;
    navBtn.callback = cb;
    navBtn.addEventListener('click', changeContent);
    navbar.appendChild(navBtn);
    return navBtn;
}

const homeBtn = createNavBtn('p', 'Home', pageLoad);
const menuBtn = createNavBtn('p', 'Menu', menuLoad);
const contactBtn = createNavBtn('p', 'Contact', contactLoad);


document.body.insertBefore(navbar, content);

content.appendChild(pageLoad());
homeBtn.classList.add('selected');