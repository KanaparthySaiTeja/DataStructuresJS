const prompt = require('prompt-sync')();
let number = prompt("Enter the starting value of the range 0-100:  ")
let numberArray = new Array()
for(let i = number; i <= 100; i++){
    let num = i.toString();
    num = num.split("")
    console.log(num)
    if(num[0] == num[1])
        numberArray.push(i)
}
console.log("Numbers with repeated digits are : " +numberArray)