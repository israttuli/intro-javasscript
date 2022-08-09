function factorial(number) {
    let i = 1;
    let result = 1;
    while (i <= number) {
        result = result * i;
        i++;
        // console.log(i,result);
    }
    return result;
}

const result =factorial(5);
console.log(result);