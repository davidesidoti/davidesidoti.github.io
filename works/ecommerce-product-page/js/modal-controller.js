window.onload = function () {
    modalSelectOne();
}

let selected = 1;

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
    selected = 1;
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
    selected = 2;
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
    selected = 3;
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
    selected = 4;
}

function showLightBox() {
    let lightbox = document.getElementById('lightbox');
    let shown_img = document.getElementById('modal-shown-image');
    let shown_light = document.getElementById('light-shown-image');
    lightbox.style.display = 'block';
    if (selected === 1) {
        lightSelectOne();
    }
    if (selected === 2) {
        lightSelectTwo();
    }
    if (selected === 3) {
        lightSelectThree();
    }
    if (selected === 4) {
        lightSelectFour();
    }

}

function closeLightBox() {
    let lightbox = document.getElementById('lightbox');
    selected = 0;
    lightbox.style.display = 'none';
    lightSelectOne();
}

function nextSlide() {
    if (selected < 4) {
        selected += 1;
    }
    else {
        selected = 1;
    }
    showLightBox();
}

function prevSlide() {
    if (selected > 0) {
        selected -= 1;
    }
    else {
        selected = 4;
    }
    showLightBox();
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