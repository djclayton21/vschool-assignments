// //#1

// // let officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// // let count = 0;
// // for(i = 0; i < officeItems.length; i++) {
// //     if(officeItems[i] === "computer"){
// //         count++;
// //     }
// // }
// // console.log(count);

// //#2

// const peopleWhoWantToSeeMadMaxFuryRoad = [
//   {
//     name: "Mike",
//     age: 12,
//     gender: "male"
//   },{
//     name: "Madeline",
//     age: 80,
//     gender: "female"
//   },{
//     name: "Cheryl",
//     age: 22,
//     gender: "female"
//   },{
//     name: "Sam",
//     age: 30,
//     gender: "male"
//   },{
//     name: "Suzy",
//     age: 4,
//     gender: "female"
//   }
// ] 
// let pronounObject = "They";
// let pronounNoun = "Them";
// let personGender = "a"
// for(let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
//   personGender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender;
//   if(personGender === "male"){
//     pronounObject = "him";
//     pronounNoun = "He";
//   } else {
//     pronounObject = "her";
//     pronounNoun = "She"
//   }
//   if(peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18){
//     console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. " + pronounNoun + "'s good to see Mad Max Fury Road")
//   } else {
//     console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT old enough. Don't let " + pronounObject + " see it!")
//   }

// }

//Bonus Challenge
function lightswitch(arr) {
  let status = "off"
  for (let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i]; j++){
      if(status === "off"){
        status = "on";
      } else if(status === "on"){
        status = "off";
      } else {
        status = "broken";
      }
    }
  }
  return status
}
let arr1 = [2, 5, 435, 4, 3] // "The light is on"
let arr2 = [1, 1, 1, 1, 3]   // "The light is on"
let arr3 = [9, 3, 4, 2]      // "The light is off"
console.log(lightswitch(arr1))
console.log(lightswitch(arr2))
console.log(lightswitch(arr3))