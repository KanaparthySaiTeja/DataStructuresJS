const prompt = require('prompt-sync')();
let number = prompt("Enter a number:  ")
number = parseInt(number)
let factorsArray = new Array()
for(let i = 2; i <= number; i++){
    while(number % i == 0){
        factorsArray.push(i)
        console.log (i);
        number = number / i;
    }
}
console.log("Prime factors are stored in array : " + factorsArray)