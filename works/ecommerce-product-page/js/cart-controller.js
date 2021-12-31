function cartToggler() {
    let cart_div = document.getElementById('cart');
    if (cart_div.style.display == 'none') {
        cart_div.style.display = 'flex';
    } else {
        cart_div.style.display = 'none';
    }
}

function addOneItem() {
    const item_number = document.getElementById('item-number');
    item_number.innerHTML = "<p>" + String(Number(item_number.innerText) + 1) + "</p>";
}

function removeOneItem() {
    const item_number = document.getElementById('item-number');
    if (Number(item_number.innerText) > 0) {
        item_number.innerHTML = "<p>" + String(Number(item_number.innerText) - 1) + "</p>";
    }
}

function addToCart() {

}