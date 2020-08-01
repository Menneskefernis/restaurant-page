import items from './dishes';

const menu = () => {
    const container = document.createElement('div');
    container.id = 'menu';
    
    for (let i = 0; i < 6; i++) {                                           // just to fill out the page
        for (let i = 0; i < Object.keys(items).length; i++) {
            container.insertAdjacentHTML('beforeend', menuItem(items[i+1]));
        }
    }

    return container;
}

const menuItem = (item) => {
    const markup = `
        <div class="menu-item">
            <img src=${item.image}>
            <div>
                <h3 class="dish-title">${item.name}</h3>
                <p class="dish-description">${item.description}</p>
                <p class="price">${item.price}</p>
            </div>
        </div>
    `;
    
    return markup;
}

export default menu;