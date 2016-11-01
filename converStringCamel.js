/*Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

Examples:

// returns "theStealthWarrior"
toCamelCase("the-stealth-warrior")

// returns "TheStealthWarrior"
toCamelCase("The_Stealth_Warrior")

https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript

*/


function toCamelCase(str){

  var separator = function(str) {
    var tempArr = str.split("-")
    if (tempArr.length===1) {
        tempArr = str.split("_")
    }

      return tempArr
    }

  var upperCaser = function(arr){
    var tempArr = arr
    var upperLetter = ""
    var restWord = ""
    for (var i = 1; i < arr.length; i++) {
      upperLetter = arr[i].charAt(0).toUpperCase()
      restWord = arr[i].substring(1)
      tempArr[i] = upperLetter+restWord
    }

      return tempArr
    }

  var combinator = function(arr) {
    var newStr = ""
    arr.forEach(item => newStr = newStr.concat(item))

      return newStr
    }


  return combinator(upperCaser(separator(str)))
}




console.log(toCamelCase("the_stealth_warrior"));

console.log(toCamelCase("The_Stealth_Warrior"));
