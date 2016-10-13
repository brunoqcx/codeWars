/*
Description:

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:

An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:

The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:

If you are given an array with multiple answers, return the lowest correct index.

https://www.codewars.com/kata/equal-sides-of-an-array

*/

var arr = [-1,2,3,2,-1],
    lefSideLast = 0,
    indexTrough = 1,
    endArr = (arr.length-1)

var totalSum = (function(arrayNum){
  var count = 0
  for (var i = 0; i < arrayNum.length; i++) {
    count = arrayNum[i] + count
  }
  return count
})(arr)

var sumLeft = arr[lefSideLast],
    sumRight = totalSum - (sumLeft + arr[indexTrough])

var result = (function compareSides(indexTrough, sumLeft, sumRight) {
  if(indexTrough >= endArr) {
    return -1;
  } else {
    if (sumLeft == sumRight){
      return indexTrough;
    } else {
      return compareSides((indexTrough+1), (sumLeft+arr[indexTrough]), (sumRight-(arr[indexTrough+1])));
    }
  }
})(indexTrough, sumLeft, sumRight)

console.log(result);
