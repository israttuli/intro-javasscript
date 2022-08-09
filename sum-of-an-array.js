function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[i];
        sum = sum + element;
        // console.log(index, element, sum);

    }
    return sum;
}

function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            // console.log(index, element);
            oddNumbers.push(element);
        }

    }
    return oddNumbers;
}

const myNumbers = [12, 4, 55, 23, 65, 23];

const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);
console.log('Odd numbers sum :', oddNumberSum);
