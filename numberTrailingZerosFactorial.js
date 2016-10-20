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
    var factorials = [2]

    var findOrFill = function(num){
      if(num==2){return 2}
      if (factorials[num]) {
         return factorials[num]
      } else {
        factorials[num] = num*findOrFill(num-1)
      }
      return factorials[num]
    }
    var log = findOrFill(n)
    console.log(log);
  }

  var findTrailZeros = function(num) {
    return num
  }

  if(n <= 7){
    return basecase()
  } else {
    return findTrailZeros(factorial())
  }

}

console.log(zeros(20));

console.log(zeros(0));

console.log(zeros(-1));

console.log(zeros(7));
