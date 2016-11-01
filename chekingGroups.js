"use strict";

function groupCheck(s){
  console.log(s);
  let mapper = {
    "{" : {exp: 0, pair:"}", wrongClose: [")", "]"]},
    "}" : {exp: 0, pair:"{", wrongClose: [""]},
    "[" : {exp: 0, pair:"]", wrongClose: [")", "}"]},
    "]" : {exp: 0, pair:"[", wrongClose: [""]},
    "(" : {exp: 0, pair:")", wrongClose: ["}", "]"]},
    ")" : {exp: 0, pair:"(", wrongClose: [""]}
  }

  let closedRight = true

  let filler = function(str){
    let newMapper = mapper
    let evalued = ""
    let lastEvalued  = false

    for (var i = 0; i < str.length; i++) {
      evalued = newMapper[str.charAt(i)]
      if (lastEvalued) {
        lastEvalued.wrongClose.forEach(function(item){
          if (newMapper[item]===evalued) {
            closedRight = false
          }
        })
      }

      if ((evalued.exp) > 0) {
        evalued.exp = (evalued.exp) - 1
      } else {
        newMapper[evalued.pair].exp = (newMapper[evalued.pair].exp) + 1
      }

      lastEvalued = evalued
    }

    return newMapper
  }

  let noLeftOvers = function(mapper){
    for (var prop in mapper){
      if (mapper[prop].exp > 0) {
          return false
      }
    }
    return true
  }

return (noLeftOvers(filler(s)) && closedRight)
}

console.log(groupCheck("{([]})"));
