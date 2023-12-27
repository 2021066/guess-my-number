document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');

    const products = [
        {
            name: 'Red Roses',
            price: '$20',
            image: 'red_roses.jpg'
        },
        {
            name: 'Sunflowers',
            price: '$15',
            image: 'sunflowers.jpg'
        },
        {
            name: 'Tulips',
            price: '$10',
            image: 'tulips.jpg'
        }
    ];

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        productList.appendChild(productDiv);
    });
});
