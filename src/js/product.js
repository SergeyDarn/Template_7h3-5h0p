const changeProduct = function(event) {
    const productInfo = document.querySelector('#productInfo'),
        productProperties = productInfo.querySelector('#productProperties'),
        productCost = productInfo.querySelector('#productCost'),
        productBuy = productInfo.querySelector('#productBuy');

    if (window.innerWidth < 768) {
        productCost.remove();
        productInfo.insertBefore(productCost, productBuy);
    } else if (event.type === 'resize') {
        productCost.remove();
        productInfo.insertBefore(productCost, productProperties);
    }
};

window.addEventListener('load', event => {
    changeProduct(event);
});

window.addEventListener('resize', event => {
    changeProduct(event);
});
