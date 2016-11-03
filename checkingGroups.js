"use strict";

function groupCheck(s){
  //console.log(s);
  let mapper = {
    "}" : "{",
    "]" : "[",
    ")" : "("
  }

  let fakeStack = []
  let tempArr = s.split("")

  //console.log(tempArr);

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

console.log(groupCheck("{([])}"));

console.log(groupCheck("{([]})"));

console.log(groupCheck("([]{})"));

console.log(groupCheck("([)]{})"));

console.log(groupCheck("{([]{})}"));
