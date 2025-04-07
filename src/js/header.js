const shop = document.querySelector('#shop'),
    shopLogo = shop.querySelector('#shopLogo'),
    shopLink = shop.querySelector('#shopLink'),
    shopPhoneNumber = shop.querySelector('#shopPhoneNumber'),
    search = document.querySelector('#search'),
    content = document.querySelector('#content'),
    breadcrumbs = document.querySelector('#breadcrumbs'),
    nav = document.querySelector('#navigation');

const changeHeaderElements = function(event) {
    if (window.innerWidth < 768) {
        shopPhoneNumber.remove();
        search.remove();
        content.insertBefore(search, breadcrumbs);

        shopLogo.remove();
        shop.insertBefore(shopLogo, shopLink);
    } else if (event.type === 'resize') {
        shopPhoneNumber.remove();
        shopLogo.remove();
        search.remove();

        shop.appendChild(shopLogo);
        shop.appendChild(shopPhoneNumber);
        nav.appendChild(search);
    }
};

window.addEventListener('load', event => {
    changeHeaderElements(event);
});

window.addEventListener('resize', event => {
    changeHeaderElements(event);
});
