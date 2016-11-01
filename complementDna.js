/*Description:

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

DNAStrand ("ATTGC") # return "TAACG"

DNAStrand ("GTAT") # return "CATA"

https://www.codewars.com/kata/554e4a2f232cdd87d9000038

*/

"use strict";

function DNAStrand(dna){
  const mapper = {
    "A" : "T",
    "T" : "A",
    "C" : "G",
    "G" : "C"
  }

  let switcher = function(dna){
    let newDna = ""
    for (var i = 0; i < dna.length; i++) {
      newDna = newDna + (mapper[dna.charAt(i)]!==undefined ? mapper[dna.charAt(i)] : dna.charAt(i))
    }

    return newDna
  }

  return switcher(dna)
}

console.log(DNAStrand("ATTGC"));

console.log(DNAStrand("GTAT"));
