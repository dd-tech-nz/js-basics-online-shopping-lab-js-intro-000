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
 var cart = []
 var price = 
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100) + 1})
 var temp = cart.slice(-1)[0]
 return temp.itemName + " has been added to your cart"

}

function viewCart() {
  // write your code here
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
