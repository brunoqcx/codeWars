/*

Description:

On 08/26/2016 (26.08.2016) the German Fussball-Bundesliga (national soccer league) started another new season!

In this kata you get an array with 9 strings, which contain the matches from the first match day.
Every string has this format, where x and y are the number of goals for the teams, if the match has already been played:

x:y [Team 1] - [Team 2]

Example:
6:0 FC Bayern München - Werder Bremen
-:- Eintracht Frankfurt - Schalke 04
The team, which has shot more goals than the other team, wins the match.

Your method should create and return the league table as one string.

Every line in the table follows these rules:

 1. Tableplace with two chars and a dot (" 1.", "12.")
 2. Space
 3. Name of the team/club padded right up to 30 chars (filled up with spaces).
 4. Number of played matches (in this kata always only one digit)
 5. Two spaces
 6. Number of won matches (in this kata always only one digit)
 7. Two spaces
 8. Number of tie matches (in this kata always only one digit)
 9. Two spaces
10. Number of lost matches (in this kata always only one digit)
11. Two spaces
12. Differences of goals (shot vs. gotten)
13. Two spaces
14. Count of points
It is 3 points for a won match and 1 point for a tie.
The table has to be sorted by these criteria:

1. Points
2. If the points are the same: The difference of goals. (2:0 is better than 1:0)
3. If the difference of goals is the same: More goals are better! (2:1 is better than 1:0)
4. Otherwise: The teams share the same place, but ordered by the name of the team (case-insensitive!)!
Example with the two matches above, if the league WOULD only have 4 teams:

 1. FC Bayern München             1  1  0  0  6:0  3
 2. Eintrach Frankfurt            0  0  0  0  0:0  0
 2. Schalke 04                    0  0  0  0  0:0  0
 4. Werder Bremen                 1  0  0  1  0:6  0
You do not have to do a check for the input values. It will always be an array of 9 strings and all strings will be complete!

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.

https://www.codewars.com/kata/57c178e16662d0d932000120
*/

function table (results) {

  results.forEach(function(item){
    var len = item.length
    var a = item.slice(0,3)
    var b = item.slice(4, len)
    a = a.split(":")
    b = b.split("-")
    b1 = b[0].trim()
    b2 = b[1].trim()

    var createGame = function(team, inHouse, result) {
      var goalsfor = inHouse ? result[0] : result [1]
      var goalsagainst = inHouse ? result[1] : result [0]
      var victory = goalsfor=="-" ? 0  : (goalsfor > goalsagainst ? 1 : 0)
      var defeat = goalsfor=="-" ? 0  : (goalsfor < goalsagainst ? 1 : 0)
      var draw  = goalsfor=="-" ? 0  : (goalsfor == goalsagainst ? 1 : 0)

      return {
        name: team,
        gamesPlayed : goalsfor == "-" ? 0 : 1,
        goalsFor : goalsfor == "-" ? 0 : goalsfor,
        goalsAgainst : goalsagainst == "-" ? 0 : goalsagainst,
        victories : victory,
        draws : draw,
        defeats : defeat
      }
    }

    var compare = function(team1, team2) {
      var betterTeam = undefined
      var worseTeam = undefined

      return [betterTeam, worseTeam]
    }

    console.log(createGame(b1, true, a));
    console.log(createGame(b2, false, a));
  })

}

console.log(table([
        "6:0 FC Bayern Muenchen - Werder Bremen",
        "1:1 Eintracht Frankfurt - Schalke 04",
        "-:- FC Augsburg - VfL Wolfsburg",
        "-:- Hamburger SV - FC Ingolstadt",
        "-:- 1. FC Koeln - SV Darmstadt",
        "-:- Borussia Dortmund - FSV Mainz 05",
        "-:- Borussia Moenchengladbach - Bayer Leverkusen",
        "-:- Hertha BSC Berlin - SC Freiburg",
        "-:- TSG 1899 Hoffenheim - RasenBall Leipzig"
      ]));
