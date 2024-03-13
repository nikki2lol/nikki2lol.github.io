import '../styles/app.scss';
import {makeHeaderMenu} from "./header-menu.js";
import {makeFormValidation} from "./form.js";
import {makeAnchors} from "./anchors.js";

makeHeaderMenu();
makeAnchors();

document.addEventListener('DOMContentLoaded', makeFormValidation);