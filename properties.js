var shoppingCart = {
    books: 5,
    pen: 18,
    sunglass: 3,
    keyboard: 2,
    mouse: 2
}
// When you know a spacific party name ,use dot to get the perty value
var keyboardCount = shoppingCart.keyboard;
// console.log(keyboardCount);

// another way 
var keyboardCount2 = shoppingCart['keyboard']
// console.log(keyboardCount2);

// var properties = Object.keys(shoppingCart);
// console.log(properties);
// var propertyValue = Object.values(shoppingCart);
// console.log(propertyValue);

var propertyName = "pen";
var propertyValue = shoppingCart[propertyName];
// console.log(propertyName,propertyValue);

console.log(shoppingCart);
/* Set property value */ 
shoppingCart.pen = 20;
console.log(shoppingCart);
shoppingCart['pen'] = 30;
console.log(shoppingCart);
shoppingCart[propertyName]=35;
console.log(shoppingCart);

