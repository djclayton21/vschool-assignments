//map

//1
// function doubleNumbers(arr){
//     return arr.map(num => num * 2)
//   }
  
//   console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

//2
// function stringItUp(arr){
//     return arr.map(num => num.toString())
//   }
  
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

//3
// function capitalizeNames(arr){
//     const  lowerCase = arr.map(name => name.toLowerCase())
//     return lowerCase.map(name => name.replace(name[0], name[0].toUpperCase()))
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

//4
// function namesOnly(arr){
//     return arr.map(obj => obj.name)
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
////   ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

//5
// function makeStrings(arr){
//     return arr.map(checkAge)
// }
// function checkAge(obj){
//     if (obj.age >= 18){
//         return `${obj.name} can go`
//     } else {
//         return `${obj.name} is too young!`
//     }
// }
// function makeStrings(arr) {
//     return arr.map( obj => obj.age >= 18 ? `${obj.name} can go `: `${obj.name} is too young`)
// }
// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 
  // ["Angelina Jolie can go to The Matrix", 
  // "Eric Jones is under age!!", 
  // "Paris Hilton is under age!!", 
  // "Kayne West is under age!!", 
  // "Bob Ziroll can go to The Matrix"]
  
//filter
// //1
// function fiveAndGreaterOnly(arr) {
//     return arr.filter(num => num >= 5)
//   }
//   // test
//   console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
  
// //2
// function evensOnly(arr) {
//     return arr.filter(num => num % 2 === 0)
// }
// // test
// console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

// //3
// function fiveCharactersOrFewerOnly(arr) {
//     return arr.filter(str => str.length <= 5)
//   }
//   // test
//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

// //4
// function peopleWhoBelongToTheIlluminati(arr){
//     return arr.filter(obj => obj.member)
//   }
//   // test
//   console.log(peopleWhoBelongToTheIlluminati([
//       {
//           name: "Angelina Jolie",
//           member: true
//       },
//       {
//           name: "Eric Jones",
//           member: false
//       },
//       {
//           name: "Paris Hilton",
//           member: true
//       },
//       {
//           name: "Kayne West",
//           member: false
//       },
//       {
//           name: "Bob Ziroll",
//           member: true
//       }
//   ]));

// //5
// function ofAge(arr){
//     return arr.filter(person => person.age >= 18)
//   }
//   // test
//   console.log(ofAge([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));