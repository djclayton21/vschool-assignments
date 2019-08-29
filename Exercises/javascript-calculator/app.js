const readline = require("readline-sync")
//functions
function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}
const options = ["add", "subtract", "multiply", "divide"];
let result

let num1 = readline.question("Please enter the first number: ")
let num2 = readline.question("Please enter the second number: ")

let operation = options[readline.keyInSelect(options, "Please enter the desired operation: ")];

switch (operation) {
    case "add":
        result = add(num1, num2);
        break
    case "subtract":
        result = subtract(num1, num2);
        break
    case "multiply":
        result = multiply(num1, num2);
        break
    case "divide":
        result = divide(num1, num2);
        break
    default:
        result = ("not a valid operation")
}
console.log(`The result of the ${operation} operation is ${result}`)


//test


