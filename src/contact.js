const info = {
    title: 'Reach us here:',
    name: 'THE Restaurant',
    address: 'THE Road 2000',
    zip: '8000 Awesomeness',
    mail: 'Mail: THE@restaurant.com',
    phone: 'Phone: 500-8008135'
}

const contactInfo = () => {
    const container = document.createElement('div');
    container.id = 'contact';

    for (let text in info) {
        container.appendChild(generateParagraph(info[text]));
    };

    return container;
}

const generateParagraph = (text) => {
    
    const paragraph = document.createElement('p');
    paragraph.textContent = text;

    return paragraph;
}

export default contactInfo;