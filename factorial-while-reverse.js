function factorial(number) {
    let i = number;
    let result = 1;
    while (i >= 1) {
        result = result * i;
        i--;
        // console.log(i,result);
    }
    return result;
}

const result = factorial(6);
console.log(result);