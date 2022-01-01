window.onload = function () {
    modalSelectOne();
}

function modalSelectOne() {
    let thumb1 = document.getElementById('img1');
    let thumb2 = document.getElementById('img2');
    let thumb3 = document.getElementById('img3');
    let thumb4 = document.getElementById('img4');
    let shown_img = document.getElementById('modal-shown-image');
    thumb1.classList.add('thumb-selected');
    thumb2.classList.remove('thumb-selected');
    thumb3.classList.remove('thumb-selected');
    thumb4.classList.remove('thumb-selected');
    shown_img.src = './images/image-product-1.jpg';
    shown_img.alt = 'image-product-1'
}

function modalSelectTwo() {
    let thumb1 = document.getElementById('img1');
    let thumb2 = document.getElementById('img2');
    let thumb3 = document.getElementById('img3');
    let thumb4 = document.getElementById('img4');
    let shown_img = document.getElementById('modal-shown-image');
    thumb1.classList.remove('thumb-selected');
    thumb2.classList.add('thumb-selected');
    thumb3.classList.remove('thumb-selected');
    thumb4.classList.remove('thumb-selected');
    shown_img.src = './images/image-product-2.jpg';
    shown_img.alt = 'image-product-2'
}

function modalSelectThree() {
    let thumb1 = document.getElementById('img1');
    let thumb2 = document.getElementById('img2');
    let thumb3 = document.getElementById('img3');
    let thumb4 = document.getElementById('img4');
    let shown_img = document.getElementById('modal-shown-image');
    thumb1.classList.remove('thumb-selected');
    thumb2.classList.remove('thumb-selected');
    thumb3.classList.add('thumb-selected');
    thumb4.classList.remove('thumb-selected');
    shown_img.src = './images/image-product-3.jpg';
    shown_img.alt = 'image-product-3'
}

function modalSelectFour() {
    let thumb1 = document.getElementById('img1');
    let thumb2 = document.getElementById('img2');
    let thumb3 = document.getElementById('img3');
    let thumb4 = document.getElementById('img4');
    let shown_img = document.getElementById('modal-shown-image');
    thumb1.classList.remove('thumb-selected');
    thumb2.classList.remove('thumb-selected');
    thumb3.classList.remove('thumb-selected');
    thumb4.classList.add('thumb-selected');
    shown_img.src = './images/image-product-4.jpg';
    shown_img.alt = 'image-product-4'
}