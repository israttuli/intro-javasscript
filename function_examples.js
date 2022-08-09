function getAverage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 55;
const assignment2Marks = 55;
const assignment3Marks = 56;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);


// console.log('My average so far: ',myAverage);


function add(num1, num2, num3) {
    var sum = num1 + num2 + num3;
    return sum;
}

var result1 = add(1, 3, 3);
var result2 = add(9, 2, 1);
var finalResult = result1 + result2;
console.log(finalResult);