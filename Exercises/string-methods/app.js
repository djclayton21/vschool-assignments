// Make a function that will return any given string into all caps followed by the same string all lowercase.
// function capilizeAndLowercase(inString) {
//     let allCaps = inString.toUpperCase();
//     let allLower = inString.toLowerCase();
//     let result = allCaps + allLower ;
//     return result
// }
// console.log(capilizeAndLowercase("Hello")) // => "HELLOhello"
// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().

// function findMiddleIndex(inString){
//     let inLength = inString.length;
//     let halfIndex = Math.floor(inLength / 2);
//     return halfIndex
// }
// findMiddleIndex("Hello") // => 2
// findMiddleIndex("Hello World") // => 5
// Make a function that uses slice() and the other functions you've written to return the first half of the string

// function returnFirstHalf(inString){
//     let halfIndex = findMiddleIndex(inString);
//     let outString = inString.slice(0, halfIndex);
//     console.log(outString);
//     return outString
// }
// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"
// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)

// function capilizeAndLowercase(inString){
//     let halfIndex = findMiddleIndex(inString);
//     let firstHalf = inString.slice(0, halfIndex);
//     let secondHalf = inString.slice(halfIndex, inString.length);
//     let outString = firstHalf.toUpperCase() + secondHalf.toLowerCase();
//     console.log(outString);
//     return outString

// }
// capilizeAndLowercase("Hello") // => "HEllo"
// capilizeAndLowercase("Hello World") // => "HELLO world"
// Optional Code Challenge (This one is a step up in difficulty):

// Make a function that takes any string and capitalizes any character that follows a space.
function capitalize(inString) {
    //find white space
    const spaces = [0];
    let lastSpace = spaces[spaces.length - 1];

    while (lastSpace >= 0){
        spaces.push(inString.indexOf(" ", lastSpace + 1));
        lastSpace = spaces[spaces.length - 1];
    }
    spaces.pop();

    //find letter after white space, change to upper case
    //replace original with capital letter

    const firstLetters = [inString[spaces[0]]];
    firstLetters[0] = firstLetters[0].toUpperCase();
    let outString = firstLetters[0] + inString.substring(1, spaces[1]);

    for(let i = 1; i < spaces.length; i++){
        firstLetters.push(inString[spaces[i] + 1]);
        firstLetters[i] = firstLetters[i].toUpperCase();
        outString = outString + " " + firstLetters[i] + inString.substring(spaces[i] + 2, spaces[i + 1]);
    }
    // console.log(outString)
    return outString
}
capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"
capitalize("Sooooo now i can just always type in lowercase")
