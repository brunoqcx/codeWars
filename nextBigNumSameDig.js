/*
You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071
If no bigger number can be composed using those digits, return -1:

nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1


https://www.codewars.com/kata/next-bigger-number-with-the-same-digits/train/javascript

*/

function nextBigger(n){
  console.log(n)
  var numToEval = n
  var num = n
  var newNum = n

  var numArrs = []
  var counter = 0
  var switchedNums = false

  var numToArray = function(num){
  var digits = []
  while (num > 0) {
      digits[digits.length] = num % 10;
      num = parseInt(num / 10);
  }
  digits.reverse();

  return digits
  }

  var eachDigArr = function(arr) {
    counterDig = [0,0,0,0,0,0,0,0,0,0]
    for (var i = 0; i < arr.length; i++) {
      counterDig[arr[i]]++
    }
    return counterDig
  }

  numArrs = eachDigArr(numToArray(n)).slice()

  var tryEach = function(number){
    var newNum = number
    //console.log(newNum);
    for (var i = 0; i < 100000 ; i++) {
        newNum++
        //console.log(eachDigArr(numToArray(newNum)));
       if (eachDigArr(numToArray(newNum)).join("")==numArrs.join("")) {
         return newNum
       }
    }
    return -1
  }

return tryEach(n)
}

// console.log(nextBigger(513));
// console.log(nextBigger(135));
// console.log(nextBigger(144));
// console.log(nextBigger(21327));
console.log(nextBigger(55260589530));
