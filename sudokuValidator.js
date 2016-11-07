/*
Sudoku Background

Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator

Write a function validSolution that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

Examples:

validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
               [6, 7, 2, 1, 9, 5, 3, 4, 8],
               [1, 9, 8, 3, 4, 2, 5, 6, 7],
               [8, 5, 9, 7, 6, 1, 4, 2, 3],
               [4, 2, 6, 8, 5, 3, 7, 9, 1],
               [7, 1, 3, 9, 2, 4, 8, 5, 6],
               [9, 6, 1, 5, 3, 7, 2, 8, 4],
               [2, 8, 7, 4, 1, 9, 6, 3, 5],
               [3, 4, 5, 2, 8, 6, 1, 7, 9]])
//Example 1 should return true

validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
               [6, 7, 2, 1, 9, 0, 3, 4, 8],
               [1, 0, 0, 3, 4, 2, 5, 6, 0],
               [8, 5, 9, 7, 6, 1, 0, 2, 0],
               [4, 2, 6, 8, 5, 3, 7, 9, 1],
               [7, 1, 3, 9, 2, 4, 8, 5, 6],
               [9, 0, 1, 5, 3, 7, 2, 1, 4],
               [2, 8, 7, 4, 1, 9, 6, 3, 5],
               [3, 0, 0, 4, 8, 1, 1, 7, 9]])
//Example 2 should returns false

http://www.codewars.com/kata/529bf0e9bdf7657179000008
*/

"use strict"
function validSolution(board){

  console.log(board);
  let mapper = {
    1 : [],
    2 : [],
    3 : [],
    4 : [],
    5 : [],
    6 : [],
    7 : [],
    8 : [],
    9 : []
  }

  let filler = function(){
    let tempArr = []
    let tempArr2 = []
    for (var i = 0; i < 9 ; i++) {
      board.forEach(function(item){
        mapper[i+1].push(item[i])
      })
      mapper[i+10] = board[i]

    }

    return mapper
  }

  var quad = function(map){

    var  eachQuad = function(x, y, mapper){
      var i = x
      var line = y
      var mapper = mapper
      var counterMapper = 0
      var counterx= i

      map[mapper] = []

      for (var j = 0; j<3 ; j++) {
        map[mapper][j] = map[line][counterx]
        counterx++
      }
      counterx = i

      for (var j = 3; j<6 ; j++) {
        map[mapper][j] = map[line+1][counterx]
        counterx++
      }
      counterx = i

      for (var j = 6; j<9 ; j++) {
        map[mapper][j] = map[line+2][counterx]
        counterx++
      }
    }

    eachQuad(0, 1, 19)
    eachQuad(3, 1, 20)
    eachQuad(6, 1, 21)
    eachQuad(0, 4, 22)
    eachQuad(3, 4, 23)
    eachQuad(6, 4, 24)
    eachQuad(0, 7, 25)
    eachQuad(3, 7, 26)
    eachQuad(6, 7, 27)


    return mapper
  }

  let checker = function(map){
    let tempArray = []
    let shouldBreak = false
    let lastItem = -1
    for (var i = 1; i < 28; i++) {
      console.log("i = "+i);
      console.log(map[i]);
      tempArray = map[i].sort()
      map[i] = tempArray
      console.log("==========");
      console.log(map[i]);
    }


    for (var i = 1; i < 28; i++) {
      map[i].forEach(function(item){
        if (item == lastItem || !item) {
          shouldBreak = true
        }
        lastItem = item
      })
    }
    console.log(mapper);

    return !shouldBreak
  }

  return checker(quad(filler(board)))
}

// console.log(validSolution(([[5, 3, 4, 6, 7, 8, 9, 1, 2],
//                [6, 7, 2, 1, 9, 0, 3, 4, 8],
//                [1, 0, 0, 3, 4, 2, 5, 6, 0],
//                [8, 5, 9, 7, 6, 1, 0, 2, 0],
//                [4, 2, 6, 8, 5, 3, 7, 9, 1],
//                [7, 1, 3, 9, 2, 4, 8, 5, 6],
//                [9, 0, 1, 5, 3, 7, 2, 1, 4],
//                [2, 8, 7, 4, 1, 9, 6, 3, 5],
//                [3, 0, 0, 4, 8, 1, 1, 7, 9]])));
//
// console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
//                [6, 7, 2, 1, 9, 5, 3, 4, 8],
//                [1, 9, 8, 3, 4, 2, 5, 6, 7],
//                [8, 5, 9, 7, 6, 1, 4, 2, 3],
//                [4, 2, 6, 8, 5, 3, 7, 9, 1],
//                [7, 1, 3, 9, 2, 4, 8, 5, 6],
//                [9, 6, 1, 5, 3, 7, 2, 8, 4],
//                [2, 8, 7, 4, 1, 9, 6, 3, 5],
//                [3, 4, 5, 2, 8, 6, 1, 7, 9]]));


    console.log(validSolution([ [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
                                [ 2, 3, 1, 5, 6, 4, 8, 9, 7 ],
                                [ 3, 1, 2, 6, 4, 5, 9, 7, 8 ],
                                [ 4, 5, 6, 7, 8, 9, 1, 2, 3 ],
                                [ 5, 6, 4, 8, 9, 7, 2, 3, 1 ],
                                [ 6, 4, 5, 9, 7, 8, 3, 1, 2 ],
                                [ 7, 8, 9, 1, 2, 3, 4, 5, 6 ],
                                [ 8, 9, 7, 2, 3, 1, 5, 6, 4 ],
                                [ 9, 7, 8, 3, 1, 2, 6, 4, 5 ]]));
