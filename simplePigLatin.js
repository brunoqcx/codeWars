/*

Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

https://www.codewars.com/kata/simple-pig-latin/train/javascript */

function pigIt(str){
  var tempArr = str.split(" ")

  var finalStr = ""

  var pigtize = function(str){
    console.log(str);
    var firstLetter = str.charAt(0)

    return str.slice(1, str.length) + firstLetter + "ay"
  }

  tempArr.forEach(function(item){
    finalStr = finalStr + pigtize(item) + " "
  })

  return finalStr.trim()
}

console.log(pigIt("Pig latin is cool"));
