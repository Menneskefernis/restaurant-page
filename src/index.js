import { header, description, menuTabs } from './headerContent';

const body = document.querySelector('body');

body.insertAdjacentElement('afterbegin', menuTabs());
body.insertAdjacentElement('afterbegin', description());
body.insertAdjacentElement('afterbegin', header());