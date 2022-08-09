var shoppingCart = {
    books: 5,
    pen: 18,
    sunglass: 3,
    keyboard: 2,
    mouse: 2
}
const keys = Object.keys(shoppingCart);
// console.log(keys);
const values = Object.values(shoppingCart);
// console.log(values);

// var keys = ['books', 'pen', 'sunglass', 'keyboard', 'mouse' ]
for (i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName,':',propertyValue); 
}

//  for in loop
for (var propertyName in shoppingCart){
    const Value = shoppingCart[propertyName];
    console.log(propertyName,Value);
}