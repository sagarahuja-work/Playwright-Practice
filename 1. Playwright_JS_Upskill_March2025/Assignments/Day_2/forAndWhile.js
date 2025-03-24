function Cart() {
    let items = [];

    const addItem = function(item) 
    {
        items.push(item);
    };

    const displayCart = function() {
        let i = 0;
        while (i < items.length) {
            console.log(items[i]);
            i++;
        }
    };

    return {
        addItem: addItem,
        displayCart: displayCart
    }
}

let objCart = new Cart(); //we created object of a cart

// now we are adding items to the cart using a for loop
let cartItems = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

for (let i = 0; i < cartItems.length; i++) {
    objCart.addItem(cartItems[i]);
    
}

console.log("Cart Items:");
objCart.displayCart();
