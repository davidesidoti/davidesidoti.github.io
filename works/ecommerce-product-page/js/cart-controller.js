function cartToggler() {
    let cart_div = document.getElementById('cart');
    if (cart_div.style.display === 'none') {
        cart_div.style.display = 'flex';
    } else {
        cart_div.style.display = 'none';
    }
}

function addOneItem() {
    let item_number = document.getElementById('item-number');
    item_number.style.color = 'black';
    item_number.innerHTML = "<p>" + String(Number(item_number.innerText) + 1) + "</p>";
}

function removeOneItem() {
    let item_number = document.getElementById('item-number');
    item_number.style.color = 'black';
    if (Number(item_number.innerText) > 0) {
        item_number.innerHTML = "<p>" + String(Number(item_number.innerText) - 1) + "</p>";
    }
}

function addToCart() {
    let cart_div = document.getElementById('cart');
    let item_number = document.getElementById('item-number');
    let cart_empty = document.getElementById('cart-empty');
    let item = document.getElementById('item');
    let checkout = document.getElementById('checkout');
    let total_price = document.getElementById('total-price');
    let price = document.getElementById('price');
    let price_string = document.getElementById('price-string');

    if (item_number.innerText === '0') {
        item_number.style.color = 'red';
    } else {
        // REMOVE EMPTY TEXT
        if (cart_empty.style.display === 'block') {
            cart_empty.style.display = 'none';
        }

        // SHOW CART
        if (cart_div.style.display === 'none') {
            cart_div.style.display = 'flex';
        }
        // DISPLAY ITEM
        if (item.style.display === 'none') {
            item.style.display = 'flex';
        }
        // DISPLAY CHECKOUT BUTTON
        if (checkout.style.display === 'none') {
            checkout.style.display = 'inline-block';
        }

        // CHANGE ITEM PRICE STRING
        price_string.innerHTML = price.innerHTML + ' x ' + item_number.innerText;
        total_price.innerHTML = '$' + String(Number((price.innerText).replace('$', '')) * Number(item_number.innerText));
    }
}

function removeItem() {
    let item = document.getElementById('item');
    let checkout = document.getElementById('checkout');
    let cart_div = document.getElementById('cart');
    let cart_empty = document.getElementById('cart-empty');

    if (item.style.display === 'flex') {
        item.style.display = 'none';
    }
    if (checkout.style.display === 'inline-block') {
        checkout.style.display = 'none';
    }
    if (cart_empty.style.display === 'none') {
        cart_empty.style.display = 'block';
    }
}