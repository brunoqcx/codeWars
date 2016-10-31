/*
At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 are in the same order as in s.

The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

For example:

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears

https://www.codewars.com/kata/merged-string-checker/train/javascript

*/

function isMerge(str, part1, part2) {
    var str = Array.from(str)
    var part1 = Array.from(part1)
    var part2 = Array.from(part2)
    var countRight = 0
    var countLeft = 0


    var tryRight = function(str, part1, part2) {

        if (str.length === 0 && str.length === part1.length && str.length === part2.length) {

            return true
        }

        if (str.length !== (part1.length + part2.length)) {
            return false
        }

        var newStr = str.slice(1, str.length)
        var newPart1 = part1.slice(1, part1.length)
        var newPart2 = part2.slice(1, part2.length)



        if (str[0] === part1[0] && str !== "") {

            return (tryRight(newStr, newPart1, part2) || tryLeft(newStr, newPart1, part2))

        }

        if (str[0] === part2[0] && str !== "") {

            return (tryLeft(newStr, part1, newPart2) || tryRight(newStr, part1, newPart2))

        }

        return false

    }

    var tryLeft = function(str, part1, part2) {

        if (str.length === 0 && str.length === part1.length && str.length === part2.length) {

            return true

        }

        if (str.length !== part1.length + part2.length) {
            return false
        }

        var newStr = str.slice(1, str.length)
        var newPart1 = part1.slice(1, part1.length)
        var newPart2 = part2.slice(1, part2.length)


        if (str[0] === part2[0] && str !== "") {

            return (tryLeft(newStr, part1, newPart2) || tryRight(newStr, part1, newPart2))

        }

        if (str[0] === part1[0] && str !== "") {

            return (tryRight(newStr, newPart1, part2) || tryLeft(newStr, newPart1, part2))

        }

        return false
    }

    var check = function(str, part1, part2) {

        if (tryRight(str, part1, part2) || tryLeft(str, part1, part2)) {
            return true
        }

        return false

    }
    var result = check(str, part1, part2)
        //console.log(result);
    return result
}
//console.log(isMerge("Bananas from Bahamas", "Bahas", "Bananas from am"));
console.log(isMerge("codewars", "code", "wasr"));
