var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 //var cart = [];
 var object = {};
 object.itemName = item;
 object.itemPrice = Math.floor(Math.random() * 100) + 1;
 cart.push(object)
 return `${object.itemName} has been added to your cart.`

}

function viewCart() {
  // write your code here
  let string = ""
  if (cart.length < 1 ) {
    return "Your shopping cart is empty."
  } else {
    for (let i = 0; i < cart.length; i++){
      string = string + `In your cart, you have ${cart[i].itemName} at ${cart[i].itemPrice}. `
    }
    return string
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
