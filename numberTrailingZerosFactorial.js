/*Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * 4 ... N

zeros(12) = 2 # 1 * 2 * 3 .. 12 = 479001600
that has 2 trailing zeros 4790016(00)
Be careful 1000! has length of 2568 digital numbers.

https://www.codewars.com/kata/number-of-trailing-zeros-of-n/train/javascript */

function zeros (n) {
  var basecase = function() {
    var num = 0;
    if (n==7) {
      num = 1
    }
    return num
  }

  var factorial = function() {
    var factorials = [1,1,2,6,24,120,720,5040]

    var findOrFill = function(num){
      if (factorials[num]) {
         return factorials[num]
      } else {

        factorials[num] = num*findOrFill(num-1)

      }
      return factorials[num]
    }
    var log = findOrFill(n)
    console.log(log);
    return log
  }

  var findTrailZeros = function(num) {
    var numStr = num.toString()
    var enshorted = function(str) {
      if (str.charAt(str.length-1)!="0") {
          return str
      } else {
          var short = str.substring(0,str.length-1)
          return enshorted(short)
      }
    }
    var shorNumStr = enshorted(numStr)
    var zeroCounter = 0

    for (var i = 0; i < shorNumStr.length; i++) {
      if (shorNumStr.charAt(i)==0) {
        zeroCounter ++
      }
    }

    return zeroCounter
  }

  if(n <= 7){
    return basecase()
  } else {
    return findTrailZeros(factorial())
  }

}


//after 170 it breaks, factorial return infinity, got to work harder and understand BigNumber in Js

console.log(zeros(170));
