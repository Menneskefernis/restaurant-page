const header = () => {
    const header = document.createElement('header');
    const bannerContainer = createContainerWithElement('banner', 'img');
    const titleContainer = createContainerWithElement('title', 'h1');

    bannerContainer.firstChild.src = "./images/Restaurant-banner-1024x373.jpg";
    bannerContainer.firstChild.alt = "Banner image showing the restaurant";

    titleContainer.firstChild.textContent = "THE Restaurant";

    header.appendChild(bannerContainer);
    header.appendChild(titleContainer);

    return header;
}

const createContainerWithElement = (name, type) => {
    const container = document.createElement('div');
    const element = document.createElement(type);
    container.id = name;
    container.appendChild(element);

    return container;
}

const description = () => {
    const description = document.createElement('p');
    description.id = "page-description";
    description.textContent = "THE is a really nice restaurant. Actually, it doesn't exist, but if it did, it would be really nice because it would serve food that was nice. The food would be so good that it would be even better than this copy!";

    return description;
}

const navigation = () => {
    const tabs = [];
    
    tabs.push(createTab('menu'));
    tabs.push(createTab('contact'));

    tabs[0].classList.add('active');

    return appendTabs(tabs);
}

const createTab = (name) => {
    const tab = document.createElement('span');
    tab.id = `${name}-btn`;
    tab.classList.add('nav-btn');
    tab.textContent = name[0].toUpperCase() +  name.slice(1);

    return tab;
}

const appendTabs = (tabs) => {
    const nav = document.createElement('nav');
    tabs.forEach(tab => {
        nav.appendChild(tab);
    });

    return nav;
}

export {header, description, navigation};