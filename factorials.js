function factorials(number) {
    let result = 1;
    for (i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}

const factorial = factorials(8);
console.log(factorial);