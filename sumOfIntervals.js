/*

Description:

Write a function called sumIntervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals

Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals

List containing overlapping intervals:

[
   [1,4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

Examples:

sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); //=> returns 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); //=> returns 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); //=> returns 19

https://www.codewars.com/kata/52b7ed099cdc285c300001cd
*/

function sumIntervals(intervals){
  var finalArr = []
  var smaller = intervals[0][0]
  var greater = intervals[0][1]
  var finalCount = 0

  intervals.forEach(function(item){
    smaller = (smaller > item[0] ? item[0] : smaller)
    greater = (greater < item[1] ? item[1] : greater)
  })

  for (var i = smaller; i < greater+1; i++) {
    finalArr[i] = 0
  }

  intervals.forEach(function(item){
    for (var i = item[0] ; i < item[1]; i++) {
      finalArr[i] = 1
    }
  })

  for (var i = smaller; i < greater+1; i++) {
    if(finalArr[i] ===1) finalCount++
  }

  console.log(finalArr);
  return finalCount
}

console.log(sumIntervals([[1,4],[7, 10],[3, 5]]));
