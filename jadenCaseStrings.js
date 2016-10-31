/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

https://www.codewars.com/kata/5390bac347d09b7da40006f6

*/

function capitalize(s)
{
    return s && s[0].toUpperCase() + s.slice(1);
}

String.prototype.toJadenCase = function () {
  var str = this.split(" ");
  var final = ""

  str.forEach(function(item){
    final = final.concat(capitalize(item))
    final = final.concat(" ")
  })
  return final.trim()
};

var b = "I Should Just Stop Tweeting, The Human Conciousness Must Raise Before I Speak My Juvenile Philosophy.".toJadenCase()
console.log(b);
