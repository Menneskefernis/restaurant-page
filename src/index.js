import { header, description, navigation } from './headerContent';
import contactInfo from './contact';
import menu from './menu';

const body = document.querySelector('body');
const content = document.getElementById('content');

body.insertAdjacentElement('afterbegin', navigation());
body.insertAdjacentElement('afterbegin', description());
body.insertAdjacentElement('afterbegin', header());

const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(btn => btn.addEventListener('click', handleNavigation))

function handleNavigation(e) {
    toggleNav(e);
    showContent(e);
}

function toggleNav(e) {
    if (e.target.classList.contains('active')) return;
    navButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.toggle('active');
}

function showContent(e) {
    content.innerHTML = '';
    e.target.id === 'contact-btn' ? content.appendChild(contactInfo()) : content.appendChild(menu());
}

window.onload = content.appendChild(menu());