/*

Write a function called validBraces that takes a string of braces, and determines if the order of the braces is valid. validBraces should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces four new characters. Open and closed brackets, and open and closed curly braces. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of open parentheses '(' , closed parentheses ')', open brackets '[', closed brackets ']', open curly braces '{' and closed curly braces '}'.

What is considered Valid? A string of braces is considered valid if all braces are matched with the correct brace.
For example:
'(){}[]' and '([{}])' would be considered valid, while '(}', '[(])', and '[({})](]' would be considered invalid.

https://www.codewars.com/kata/valid-braces/train/javascript
*/

function validBraces(braces){

    let mapper = {
      "}" : "{",
      "]" : "[",
      ")" : "("
    }

    let fakeStack = []
    let tempArr = braces.split("")


    var fillerStack = function(stack, arrSource) {
      arrSource.forEach(function(item){
        if (mapper[item] && mapper[item] == fakeStack[fakeStack.length-1]) {
            fakeStack.pop()
        } else {
          //console.log("item= "+item);
          fakeStack.push(item)
        }
      })
      return fakeStack
    }

    var result = (fillerStack(fakeStack, tempArr).length === 0 ? true : false)

    return result
  }
