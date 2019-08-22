// function addTwo(a, b){
//     let c = a + b; 
//     return c
// }

// console.log(addTwo(5, 3));

// function myMax(a, b, c){
//     let maximum = Math.max(a, b, c);
//     return maximum
// }

// console.log(myMax(3, 5, 20));

// function evenOrOdd(a) {
//     let answer = (a % 2 === 0) ? "even" : "odd";
//     return answer
// }

// console.log(evenOrOdd(3));

// function playWithString(a) {
//     let newString
//     if (a.length <= 20){
//         newString = a.concat(a);
//     } else {
//         let newStringLength = Math.round(a.length / 2);
//         newString = a.substring(0, newStringLength);
//     }
//     return newString
// }

// console.log(playWithString("Why hello there"));
// console.log(playWithString("This should be too long and only return the first half"));

// function fibonacciSum(n) {
//     //make array of n fibonacci numbers
//     let fibonaccis = [1 , 1];

//     for(let i = 2; i < n; i++) {
//         fibonaccis[i] = fibonaccis[i - 1] + fibonaccis[i - 2];
//     }
//     //sum of array
//     let fibSum = 0;
//     for(let i = 0; i < n; i++){
//         fibSum += fibonaccis[i];
//     }
//     return fibSum
// }
// console.log(fibonacciSum(20));

function mostCommonLetter(inString) {
    //read string and count letters
    const count = {
        letters:[inString[0]],
        freq:[1],
    }
    for(let i = 1; i < inString.length; i++){

        for(let j = 0; j < count.letters.length; j++){

            if(inString[i] === count.letters[j]){
                count.freq[j]++
                break
            }
            //  else {
            //     console.log("Letter " + inString[i] + " not found");
            //     count.letters[j + 1] = inString[i];
            //     count.freq[j + 1] = 1;
            //     break
            // }              
        }
    }
    return count
}
console.log(mostCommonLetter("hhhhhhhHHHH"));


