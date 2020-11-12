let numberArr = new Array();

for(let i = 0; i < 10; i++){
    let number = Math.floor(Math.random()*900) + 100
    numberArr.push(number)
}
numberArr.sort();
console.log("Array : " + numberArr)
console.log("Second Maximum: " + numberArr[numberArr.length-2] + "\nSecond Minimum: " + numberArr[2]) 