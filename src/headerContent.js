const header = () => {
    const header = document.createElement('header');
    const bannerContainer = document.createElement('div');
    const bannerImage = document.createElement('img');
    const titleContainer = document.createElement('div');
    const title = document.createElement('h1');
    
    bannerContainer.id = 'banner';
    titleContainer.id = 'title';

    bannerImage.src = "./images/Restaurant-banner-1024x373.jpg";
    bannerImage.alt = "Banner image showing the restaurant";

    titleContainer.appendChild(title);
    title.textContent = "THE Restaurant";

    bannerContainer.appendChild(bannerImage);
    header.appendChild(bannerContainer);
    header.appendChild(titleContainer);

    return header;
}

const description = () => {
    const description = document.createElement('p');
    description.id = "page-description";
    description.textContent = "THE is a really nice restaurant. Actually, it doesn't exist, but if it did, it would be really nice because it would serve food that was nice. The food would be so good that it would be even better than this copy!";

    return description;
}

const menuTabs = () => {
    const nav = document.createElement('nav');
    const contactTab = document.createElement('span');
    const menuTab = document.createElement('span');

    menuTab.id = "menu-btn";
    contactTab.id = "contact-btn";

    menuTab.classList.add('nav-btn', 'active');
    contactTab.classList.add('nav-btn');

    menuTab.textContent = "Menu";
    contactTab.textContent = "Contact";

    nav.appendChild(menuTab);
    nav.appendChild(contactTab);

    return nav;
}

export {header, description, menuTabs};