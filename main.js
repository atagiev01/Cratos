

// var x = 5
// let b = 1000;

// function myFunction(){
//   let b = 100;
//   var x = 10;
//   console.log(x)
  
// }

// console.log(x)
// // var x = 5

// myFunction()


let num = document.querySelector("#number");
let currentNum = parseInt(num.value);
var x =  5;


function pluse(){
  if(currentNum < x){
    currentNum++;
    num.value = currentNum

  }
}
function minus(){
  if(currentNum > -x){
    currentNum--;
    num.value = currentNum
    
  }
}

 


// var x = (prompt("Birinci ədədi daxil edin:"));
// var y = +(prompt("İkinci ədədi daxil edin:"));

// var result = document.getElementById("result")

// var resultXY = [];

// resultXY.push(x+y)

// console.log(resultXY);

function outerFunction(x) {
  function innerFunction(y, operation) {
    if (operation === '+') {
      return x + y;
    } else if (operation === '-') {
      return x - y;
    } else {
      return "Düzgün əməliyyat daxil edin (+ və ya -)";
    }
  }
  return innerFunction;
}

// var userInput = +(prompt("Birinci ədədi daxil edin:"));
// var operationInput = prompt("Əməliyyatı daxil edin (+ və ya -):");
// var performOperation = outerFunction(userInput);
// var secondInput = +(prompt("İkinci ədədi daxil edin:"));
// var result = performOperation(secondInput, operationInput);

// console.log("Nəticə:", result);

// var myArray = [1, 23, 4, 5];
// var reversedArray = myArray.reverse();

// console.log(reversedArray); 




//! əgər dəyişkənin value-su funksiyadırsa dəyişkən özü funksiya hesab olunur
//? yalnız dəyişkənə funksiya artırmaq lazimdir // niyə?

function outerClouser(){
  let count = 10;
  function inClouser(){
    count++
    return count
  }
  return inClouser
}

var func = outerClouser()
console.log( func());


