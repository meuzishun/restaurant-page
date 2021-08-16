import { pageLoad } from "./page-load.js";
import { menuLoad } from "./menu.js";

const content = document.querySelector('#content');

let container = menuLoad();

content.appendChild(container);