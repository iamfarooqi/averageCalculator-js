var numbers = [];
var sum = 0;
let numbersLength = +prompt("Enter the length of inputs : ")
for (var i = 0; i < numbersLength; i++) {
    numbers.push(+prompt("Enter Number : " + (i + 1)));
}
function averageCalculator(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    avgNo = sum / numbers.length;
    return avgNo;
}
let result = averageCalculator(numbers)

document.write("Your average answer is : ", result) ;

// let numbers;
// let sum = 0;

// function averageCalculator() {
//     let input = +prompt("Enter the Length : ")
//     for (var i = 0; i < input.length; i++) {
//         numbers.push(+prompt("Enter the Length : "))
//         sum += numbers = [i]
//     }
// }

// averageCalculator();