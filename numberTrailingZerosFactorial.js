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
    var knownsFacts = [720] //7!



    var calculateFact = function(n){
      if (knownsFacts[n-8]) {
        
      }
      if(n==8){
        var mult = (n * knownsFacts[0])
        console.log(mult)
        knownsFacts[1] = mult
      }
    }

    calculateFact(n)

    return knownsFacts[n-7]
  }

  var trailZeros = function(prodOfFactorial) {

  }

  var discoverAndReturn = function() {
    var num = 0
    num = trailZeros(factorial())
    return num
  }


  if(n <= 7){
    return basecase()
  } else {
    console.log("maior q 8");
    return factorial()
  }

}

console.log(zeros(7));

console.log(zeros(8));
