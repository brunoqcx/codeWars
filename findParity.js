/*
Description:

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns N.

For example:

[2, 4, 0, 100, 4, 11, 2602, 36]

Should return: 11

[160, 3, 1719, 19, 11, 13, -21]

Should return: 160

https://www.codewars.com/kata/find-the-parity-outlier/javascript  */

var lista = [ 14311919,
  -126227671,
  -118251535,
  55525763,
  80863441,
  -79613141,
  118954675,
  -145257693,
  131290977,
  42397578,
  -164145623,
  -76008685,
  -84852691,
  -135503843,
  -178379669 ]

var arrSample = function(arr) {
    var sample =  arr.slice(0,3);

    return sample;
}

var listParity = function(sample) {
  var parity = 0;
  for (var i = 0; i < sample.length; i++) {
    var sanitizedNum = sample[i] > 0 ? sample[i] : -(sample[i])
    if (sanitizedNum%2 > 0) {
        parity++
    }
  }

  if (parity>1) {
    return "odd"
  } else {
    return "even"
  }

}

var findDiffElem = function(listParity, originList) {
    if (listParity === "even") {
        for (var i = 0; i < originList.length; i++) {
          var sanitizedNum = originList[i] > 0 ? originList[i] : -(originList[i])
          if (sanitizedNum%2 > 0) {
            return originList[i]
          }
        }
    } else {
        for (var i = 0; i < originList.length; i++) {
          var sanitizedNum = originList[i] > 0 ? originList[i] : -(originList[i])
          if (sanitizedNum%2 == 0) {
            return originList[i]
          }
        }
    }
}

console.log(listParity(arrSample(lista)));
console.log(findDiffElem(listParity(arrSample(lista)), lista));
