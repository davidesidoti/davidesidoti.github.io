window.onload = function () {
    lightSelectOne();
}

function lightSelectOne() {
    let thumb1 = document.getElementById('light1');
    let thumb2 = document.getElementById('light2');
    let thumb3 = document.getElementById('light3');
    let thumb4 = document.getElementById('light4');
    let shown_light = document.getElementById('light-shown-image');
    thumb1.classList.add('thumb-selected');
    thumb2.classList.remove('thumb-selected');
    thumb3.classList.remove('thumb-selected');
    thumb4.classList.remove('thumb-selected');
    shown_light.src = './images/image-product-1.jpg';
    shown_light.alt = 'image-product-1'
}

function lightSelectTwo() {
    let thumb1 = document.getElementById('light1');
    let thumb2 = document.getElementById('light2');
    let thumb3 = document.getElementById('light3');
    let thumb4 = document.getElementById('light4');
    let shown_light = document.getElementById('light-shown-image');
    thumb1.classList.remove('thumb-selected');
    thumb2.classList.add('thumb-selected');
    thumb3.classList.remove('thumb-selected');
    thumb4.classList.remove('thumb-selected');
    shown_light.src = './images/image-product-2.jpg';
    shown_light.alt = 'image-product-2'
}

function lightSelectThree() {
    let thumb1 = document.getElementById('light1');
    let thumb2 = document.getElementById('light2');
    let thumb3 = document.getElementById('light3');
    let thumb4 = document.getElementById('light4');
    let shown_light = document.getElementById('light-shown-image');
    thumb1.classList.remove('thumb-selected');
    thumb2.classList.remove('thumb-selected');
    thumb3.classList.add('thumb-selected');
    thumb4.classList.remove('thumb-selected');
    shown_light.src = './images/image-product-3.jpg';
    shown_light.alt = 'image-product-3'
}

function lightSelectFour() {
    let thumb1 = document.getElementById('light1');
    let thumb2 = document.getElementById('light2');
    let thumb3 = document.getElementById('light3');
    let thumb4 = document.getElementById('light4');
    let shown_light = document.getElementById('light-shown-image');
    thumb1.classList.remove('thumb-selected');
    thumb2.classList.remove('thumb-selected');
    thumb3.classList.remove('thumb-selected');
    thumb4.classList.add('thumb-selected');
    shown_light.src = './images/image-product-4.jpg';
    shown_light.alt = 'image-product-4'
}