/*
Description:

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

Test.assertEquals(humanReadable(0), '00:00:00', 'humanReadable(0)');
    Test.assertEquals(humanReadable(5), '00:00:05', 'humanReadable(5)');
    Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');
    Test.assertEquals(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
    Test.assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)');

https://www.codewars.com/kata/52685f7382004e774f0001f7

*/

function humanReadable(sec) {
  var seconds = function(secondsToConvert){
    var result = {}

    result.minutes = Math.floor(secondsToConvert/60)
    result.seconds = Math.floor(secondsToConvert%60)

    return result
  }

  var minutes = function(timeObj){
    var result = timeObj

    result.hours = Math.floor(timeObj.minutes/60)
    result.minutes = Math.floor(timeObj.minutes%60)
    result.seconds = timeObj.seconds

    return result
  }

  var hours = function(timeObj) {
    var result = timeObj

    result.hours = timeObj.hours > 99 ? 99 : timeObj.hours
    result.minutes = timeObj.minutes
    result.seconds = timeObj.seconds

    return result
  }

  var print = function(timeObj){
    var padd = function(num) {
      return (num>=10 ? num.toString() : "0"+num)
    }

    var hoursTime = padd(timeObj.hours)
    var minutesTime = padd(timeObj.minutes)
    var secondsTime = padd(timeObj.seconds)


    return hoursTime+":"+minutesTime+":"+secondsTime
  }

  return print(hours(minutes(seconds(sec))))
}
