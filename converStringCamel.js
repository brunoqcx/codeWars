/*Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

Examples:

// returns "theStealthWarrior"
toCamelCase("the-stealth-warrior")

// returns "TheStealthWarrior"
toCamelCase("The_Stealth_Warrior")

https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript

*/


function toCamelCase(str){
  //should run on string if it finds "-" || "_" should eliminate [i], UpperCase[i+1] and continue on [i+2]
  for (var i = 0; i < str.length; i++) {
    //console.log(str.charAt(i));
    if (str.charAt(i)==="-" || str.charAt(i)==="_" ) {
      //(str.charAt(i)) = (str.charAt(i)).toUpperCase()
      console.log("opa");
    }
  }
}




console.log(toCamelCase("The_Stealth_Warrior"));
