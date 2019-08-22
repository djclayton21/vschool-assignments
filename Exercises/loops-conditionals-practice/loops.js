var eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"]


// for (let i = 0; i < eventsAtWork.length; i++) {
//     if(eventsAtWork[i] === "party") {
//         console.log("Hooray", i);
//     }
// }

// let i = 0
// for( ; i < 10; ){
//     i++
//     console.log(i)
// }

let booleans = [true, true , false, true, false, false, false];
let count = 0;
for (let i = 0; i < booleans.length; i++) {
    if(booleans[i] === true) {
        count += 1 ; 
    }
}

console.log(count);