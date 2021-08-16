import { pageLoad } from "./page-load.js";
import { menuLoad } from "./menu.js";
import { contactLoad } from "./contact.js";

const content = document.querySelector('#content');

let container = contactLoad();

content.appendChild(container);