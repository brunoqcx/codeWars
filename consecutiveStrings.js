/*You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:

longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

    testing(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
    testing(longestConsec([], 3), "")
    testing(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
    testing(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
    testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
    testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
    testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
    testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")

    Your task is to return the first longest string consisting of k consecutive strings taken in the array.
    In other words construct all strings constitued of k consecutive (following one another) strings of the array and return the first which has the longest length.

    Edit: Don't say it is badly worded, I could say that it is badly understood:-)

https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
*/

  var formArrayConcat = function(arr, k){
    if (arr.length===0 || k > arr.length || k<=0) {
      return ""
    }
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
      tempOpArr = arr.slice(0)
      tempArr = tempOpArr.splice(i, k);
      tempStr = tempArr.join('')
      newArr = newArr.concat(tempStr)
    }

    return newArr
  }

  var runArrayFormedStarr = function(arrayFormedStarr){
    if (arrayFormedStarr ==="") {
      return arrayFormedStarr
    }
      var greater  = ""
      arrayFormedStarr.forEach(function(starr){
        if (starr.length > greater.length) {
          greater = starr
        }
      })
      return greater
  }

//console.log(runArrayFormedStarr(["bruno", "lua", "carro", "ovelha"]));

//console.log(runArrayFormedStarr(formArrayConcat(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)));


//console.log(runArrayFormedStarr(formArrayConcat(["zone", "abigail", "theta", "form", "libe", "zas"], -2)));

console.log(runArrayFormedStarr(formArrayConcat(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15)));

//console.log(runArrayFormedStarr(formArrayConcat(["zone", "abigail", "theta", "form", "libe", "zas"], -2)))(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0)
