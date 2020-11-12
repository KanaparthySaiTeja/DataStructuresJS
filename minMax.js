  
let numberArray = new Array();

for(let i = 0; i < 10; i++){
    let number = Math.floor(Math.random()*900) + 100
    numberArray.push(number)
}

let min = numberArray[0]
let max = numberArray[0]
let temp;
for(let i = 1; i < numberArray.length; i++){
    for(j = i+1;j<numberArray.length;j++){
        if(numberArray[i]>numberArray[j]){
            temp=numberArray[i];
            numberArray[i]=numberArray[j]
            numberArray[j] = temp;
        }
    }
}

console.log("Array : " + numberArray)
console.log("Second Maximum: " + numberArray[numberArray.length-2] + "\nSecond Minimum: " + numberArray[2]) 