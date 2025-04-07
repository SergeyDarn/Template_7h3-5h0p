import PropertySelector from './property-selector.js';

const dispatcher = document.querySelector('#page');

new PropertySelector(document.querySelector('#colorList'));
new PropertySelector(document.querySelector('#sizeList'));

function changePicture(color) {
    document.querySelector('#productImg').src = 'img/tshirt_' + color + '.jpg';
}

dispatcher.addEventListener('property-selected', (event) => {
    const data = event.detail;

    if (data.type === 'color') {
        changePicture(data.value);
    }
} );


