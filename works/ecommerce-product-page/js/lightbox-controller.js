function showLightBox(i) {
    let lightbox = document.getElementById('lightbox');
    let shown_img = document.getElementById('modal-shown-image');
    let shown_light = document.getElementById('light-shown-image');
    lightbox.style.display = 'block';

}

function closeLightBox() {
    let lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

function lightSelectOne() {
    let light1 = document.getElementById('light1');
    let light2 = document.getElementById('light2');
    let light3 = document.getElementById('light3');
    let light4 = document.getElementById('light4');
    let shown_light = document.getElementById('light-shown-image');
    light1.classList.add('light-selected');
    light2.classList.remove('light-selected');
    light3.classList.remove('light-selected');
    light4.classList.remove('light-selected');
    shown_light.src = './images/image-product-1.jpg';
    shown_light.alt = 'image-product-1'
}

function lightSelectTwo() {
    let light1 = document.getElementById('light1');
    let light2 = document.getElementById('light2');
    let light3 = document.getElementById('light3');
    let light4 = document.getElementById('light4');
    let shown_light = document.getElementById('light-shown-image');
    light1.classList.remove('light-selected');
    light2.classList.add('light-selected');
    light3.classList.remove('light-selected');
    light4.classList.remove('light-selected');
    shown_light.src = './images/image-product-2.jpg';
    shown_light.alt = 'image-product-2'
}

function lightSelectThree() {
    let light1 = document.getElementById('light1');
    let light2 = document.getElementById('light2');
    let light3 = document.getElementById('light3');
    let light4 = document.getElementById('light4');
    let shown_light = document.getElementById('light-shown-image');
    light1.classList.remove('light-selected');
    light2.classList.remove('light-selected');
    light3.classList.add('light-selected');
    light4.classList.remove('light-selected');
    shown_light.src = './images/image-product-3.jpg';
    shown_light.alt = 'image-product-3'
}

function lightSelectFour() {
    let light1 = document.getElementById('light1');
    let light2 = document.getElementById('light2');
    let light3 = document.getElementById('light3');
    let light4 = document.getElementById('light4');
    let shown_light = document.getElementById('light-shown-image');
    light1.classList.remove('light-selected');
    light2.classList.remove('light-selected');
    light3.classList.remove('light-selected');
    light4.classList.add('light-selected');
    shown_light.src = './images/image-product-4.jpg';
    shown_light.alt = 'image-product-4'
}