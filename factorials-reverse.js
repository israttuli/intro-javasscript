function factorial(number) {
    let result = 1;
    for (i = number; i >= 1; i--) {
        result = result * i;
        console.log(i,result);
    }
    return result;
}
const number = 6;
var answer = factorial(number);
console.log('Factorials of',number,"is:" ,answer);