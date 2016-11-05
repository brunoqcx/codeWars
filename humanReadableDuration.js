
/*

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

  formatDuration(62)    // returns "1 minute and 2 seconds"
  formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
Note that spaces are important.

Detailed rules

The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

For the purpose of this Kata, a year is 365 days and a day is 24 hours.

https://www.codewars.com/kata/human-readable-duration-format/train/javascript
*/

function formatDuration(seconds2) {
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

    result.days = Math.floor(timeObj.hours/24)
    result.hours = Math.floor(timeObj.hours%24)
    result.minutes = timeObj.minutes
    result.seconds = timeObj.seconds

    return result
  }

  var days = function(timeObj) {
    var result = timeObj

    result.years = Math.floor(timeObj.days/365)
    result.days = Math.floor(timeObj.days%365)
    result.hours = timeObj.hours
    result.minutes = timeObj.minutes
    result.seconds = timeObj.seconds

    return result
  }

  var print = function(timeObj){
    var resultTime = ""

    if (timeObj.years+timeObj.days+timeObj.hours+timeObj.minutes+timeObj.seconds === 0) {
      return "now"
    }

    var years = function(time){
      var tempTime = time
      if(timeObj.years!==0){
        return (timeObj.years>1 ? timeObj.years + " years, " + tempTime : timeObj.years + " year, " + tempTime)
      }
      return tempTime
    }

    var days = function(time){
      var tempTime = time
      if(timeObj.days!==0){
        return (timeObj.days>1 ? timeObj.days + " days, " + tempTime : timeObj.days + " day, " + tempTime)
      }
      return tempTime
    }

    var hours = function(time){
      var tempTime = time
      if(timeObj.hours!==0){
        return (timeObj.hours>1 ? timeObj.hours + " hours, " + tempTime : timeObj.hours + " hour, " + tempTime)
      }
      return tempTime
    }

    var minutes = function(time){
      var tempTime = time
      if(timeObj.minutes!==0){
        return (timeObj.minutes>1 ? timeObj.minutes + " minutes, " + tempTime : timeObj.minutes + " minute, " + tempTime)
      }
      return tempTime
    }

    var seconds = function(time){
      var tempTime = time
      if(timeObj.seconds!==0){
        return (timeObj.seconds>1 ? timeObj.seconds + " seconds" + tempTime : timeObj.seconds + " second" + tempTime)
      }
      return tempTime
    }

    resultTime = years(days(hours(minutes(seconds("")))))
    return resultTime
  }

  var format = function(str){
    console.log(str);
    var tempTime = str
    var finalTime = str
    var lastComma = false
    if (str === "now") {
      return "now"
    }

    for (var i = 0; i < tempTime.length; i++) {
      if(tempTime.charAt(i)===","){
        lastComma = i
      }
    }
    if (!lastComma) {
        return str.trim()
    }
    if ((lastComma+2)===tempTime.length) {
      return format(tempTime.slice(0,lastComma))
    } else {
      finalTime = tempTime.slice(0,lastComma) + " and"+tempTime.slice(lastComma+1, tempTime.length)

      return finalTime
    }

  }

  return format(print(days(hours(minutes(seconds(seconds2))))))
}

console.log(formatDuration(1));
