/*

Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

Note that for simplicity you may assume that there are always spaces between numbers and operations, e.g. 1 3 + expression is valid, but 1 3+ isn't.

Empty expression should evaluate to 0.

Valid operations are +, -, *, /.

You may assume that there won't be exceptional situations (like stack underflow or division by zero).


https://www.codewars.com/kata/reverse-polish-notation-calculator/train/javascript

*/
"use strict";

function calc(expr) {

  let mapper = {
    "+" : function(num1, num2){
      return num1+num2
    },
    "-" : function(num1, num2){
      return num1-num2
    },
    "*" : function(num1, num2){
      return num1*num2
    },
    "/" : function(num1, num2){
      return num1/num2
    }
  }

  let operationDone = false
  let failEscape = "none"

  var symbols = expr.split(" ")
  console.log("symbols= "+symbols);

  let evaluated = function(arrSymbols){
    let total = []
    let result = 0
    let a, b = 0
    arrSymbols.forEach(function(item){
      if (mapper[item]!=undefined) {
          operationDone = true
          a = parseInt(total.pop())
          b = parseInt(total.pop())
          console.log("a = "+a);
          console.log("b = "+b);
          result = mapper[item](b, a)

          total.push(result)
          console.log(total);

      } else {
        total.push(item)
      }
    })

    if (!operationDone) {
      failEscape = (Number.isInteger(total[total.length-1]/1) ? parseInt(total[total.length-1]) : parseFloat(total[total.length-1]))
    //  failEscape = parseInt(total[total.length-1])
    }

    if(arrSymbols[0]===""){
      failEscape = 0
    }

    return (failEscape!=="none" ? failEscape : total[0])
  }

  return evaluated(symbols)
}

console.log(calc("1 2 3.5"))
