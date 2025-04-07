const serviceSupport = document.querySelector('#serviceSupport'),
    serviceSupportTitle = document.querySelector('#serviceSupportTitle'),
    about = document.querySelector('#about'),
    aboutTitle = document.querySelector('#aboutTitle');

let isPhone = window.innerWidth < 768;

function hide(elem) {
    elem.className += ' hidden';
}

function show(elem) {
    elem.classList.remove('hidden');
}

function changeVisibility(elem) {
    if (elem.className.includes('hidden')) {
        show(elem);
    } else {
        hide(elem);
    }
}

const changeFooterElements = function() {
    isPhone = window.innerWidth < 768;

    if (isPhone) {
        hide(about);
        hide(serviceSupport);

        serviceSupportTitle.onclick = () => {
            changeVisibility(serviceSupport);
        };

        aboutTitle.onclick = () => {
            changeVisibility(about);
        };
    } else {
        show(about);
        show(serviceSupport);

        serviceSupportTitle.onclick = '';
        aboutTitle.onclick = '';
    }
};

window.addEventListener('load', () => {
    changeFooterElements();
});

window.addEventListener('resize', () => {
    changeFooterElements();
});
