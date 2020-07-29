const header = () => {
    const header = document.createElement('header');
    const bannerElement = document.createElement('div');
    const bannerImage = document.createElement('img');
    const restaurantName = document.createElement('h1');
    
    bannerImage.src = "./Images/Restaurant-banner-1024x373.jpg";
    bannerImage.alt = "Banner image showing the restaurant";

    restaurantName.textContent = "THE Restaurant";

    bannerElement.appendChild(bannerImage);
    header.appendChild(bannerElement);
    header.appendChild(restaurantName);

    return header;
}

const description = () => {
    const description = document.createElement('p');
    description.id = "description";
    description.textContent = "This is a really nice restaurant. Actually, it doesn't exist, but if it did, it would be really nice because it would serve food that was nice. The food would be so good that it would be even better than this copy!";

    return description;
}

const menuTabs = () => {
    const nav = document.createElement('nav');
    const contactTab = document.createElement('span');
    const menuTab = document.createElement('span');

    contactTab.textContent = "Contact";
    menuTab.textContent = "Menu";

    nav.appendChild(menuTab);
    nav.appendChild(contactTab);

    return nav;
}

export {header, description, menuTabs};