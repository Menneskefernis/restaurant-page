const menu = () => {
    const container = document.createElement('div');
    container.id = 'menu';

    for (let i = 0; i < 10; i++) {
        container.insertAdjacentHTML('beforeend', menuItem());
    }

    return container;
}

const menuItem = () => {
    const markup = `
        <div class="menu-item">
            <img src="./images/mince-recipes-switcher.jpg">
            <div>
                <h3 class="dish-title">Delish Dish</h3>
                <p class="dish-description">This is a delicious dish with absolutely no potatoes, but with pista pasta and a grain of salt.</p>
                <p class="price">$14.95</p>
            </div>
        </div>
    `;
    
    return markup;
}

export default menu;