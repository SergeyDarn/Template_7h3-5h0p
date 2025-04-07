const phone = document.querySelector('#phone');

const changeSocial = function(event) {
    if (window.innerWidth < 768) {
        phone.classList.remove('hidden');
    } else if (event.type === 'resize') {
        phone.classList += ' hidden';
    }
};

window.addEventListener('load', event => {
    changeSocial(event);
});

window.addEventListener('resize', event => {
    changeSocial(event);
});
