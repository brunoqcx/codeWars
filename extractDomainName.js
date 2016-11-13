/*

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github"
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

https://www.codewars.com/kata/extract-the-domain-name-from-a-url-1/train/javascript
*/


function domainName(url){
  var extractProtocol = function(str){
    var newStrArr = []
    newStrArr = str.split("//")

    if (newStrArr[0]!= url) {
      newStrArr = newStrArr.slice(1)
    }

    return newStrArr
  }

  var extractPaths = function(arrStr){
    tempStrArr = arrStr[0].split(".")
    finalStr = ""

    if (tempStrArr[0]==="www") {
      tempStrArr = tempStrArr.slice(1)
    }

    finalStr = tempStrArr.shift()

    return finalStr
  }

  return extractPaths(extractProtocol(url))

}

console.log(domainName("http://github.com/carbonfive/raygun"));

console.log(domainName("www.xakep.ru"));
