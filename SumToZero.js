const prompt = require('prompt-sync')();

let number1 = Math.floor(Math.random()*1000)
let number2 = Math.floor(Math.random()*1000)
let number3 = -(number1 + number2)

let numberArr = new Array()
numberArr.push(number1)
numberArr.push(number2)
numberArr.push(number3)

let total = 0;
function sum(num){ 
    total = total + num
}
numberArr.forEach(sum)
console.log("Sum of " + number1 + "," + number2 + "," + number3 + ":  " + total)
