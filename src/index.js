import { header, description } from './headerContent';

const body = document.querySelector('body');

body.insertAdjacentElement('afterbegin', header());
body.insertAdjacentElement('beforeend', description());