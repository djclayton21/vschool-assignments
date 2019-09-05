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

//sort
//1
// function leastToGreatest(arr) {
//   return arr.sort( (a,b) => a - b)
// }

// console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90] 

//2
// function greatestToLeast(arr) {
//   return arr.sort((a,b) => b - a)
// }

// console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1] 

//3
// function lengthSort(arr) {
//   return arr.sort((a, b) => a.length - b.length)
// }

// console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"] 

//4
// function alphabetical(arr) {
//     const sorted = arr.sort(function(a , b){
//       return a[0].localeCompare(b[0])
//     })
//     return sorted
// }

// console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"] 

// //5
// function byAge(arr){
//     return arr.sort((p1, p2) => p1.age - p2.age)
// }

// console.log(byAge([
//     {
//         name: "Quiet Samurai",
//         age: 22
//     },
//     {
//         name: "Arrogant Ambassador",
//         age: 100
//     },
//     {
//         name: "Misunderstood Observer",
//         age: 2
//     },
//     {
//         name: "Unlucky Swami",
//         age: 77
//     }
// ]));

//reduce
//1
// function total(arr) {
//   return arr.reduce((acc, num) => acc += num)
// }

// console.log(total([1,2,3])); // 6

// //2
// function stringConcat(arr) {
//   return arr.reduce((str, num) => str + num, "")
// }

// console.log(stringConcat([1,2,3])); // "123"
//3
// function totalVotes(arr) {
//   return arr.reduce((count, person) => {
//     if (person.voted === true){
//       count += 1
//     } 
//     return count
//   },0)   
// }

// var voters = [
//    {name:'Bob' , age: 30, voted: true},
//    {name:'Jake' , age: 32, voted: true},
//    {name:'Kate' , age: 25, voted: false},
//    {name:'Sam' , age: 20, voted: false},
//    {name:'Phil' , age: 21, voted: true},
//    {name:'Ed' , age:55, voted:true},
//    {name:'Tami' , age: 54, voted:true},
//    {name: 'Mary', age: 31, voted: false},
//    {name: 'Becky', age: 43, voted: false},
//    {name: 'Joey', age: 41, voted: true},
//    {name: 'Jeff', age: 30, voted: true},
//    {name: 'Zack', age: 19, voted: false}
// ];
// console.log(totalVotes(voters)); // 7

//4
// function shoppingSpree(arr) {
//   return arr.reduce((bill, item) => bill += item.price, 0)
// }

// var wishlist = [
//    { title: "Tesla Model S", price: 90000 },
//    { title: "4 carat diamond ring", price: 45000 },
//    { title: "Fancy hacky Sack", price: 5 },
//    { title: "Gold fidgit spinner", price: 2000 },
//    { title: "A second Tesla Model S", price: 90000 }
// ];

// console.log(shoppingSpree(wishlist)); // 227005

// //5
// function flatten(arr) {
//   return arr.reduce((newArr, subArr) => newArr.concat(subArr), [])
// }

// var arrays = [
//    ["1", "2", "3"],
//    [true],
//    [4, 5, 6]
// ];

// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

//6
var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
  return arr.reduce((result, voter) => {
    if (18 <= voter.age && voter.age <= 25){
      result.youth++
      if (voter.voted === true){
        result.youngVotes++
      }
    }
    if (26 <= voter.age && voter.age <= 35){
      result.mids++
      if (voter.voted === true){
        result.midVotes++
      }
    }
    if (36 <= voter.age && voter.age <= 55){
      result.olds++
      if (voter.voted === true){
        result.oldVotes++
      }
    }
    return result
  },{
    youngVotes: 0,
    youth: 0,
    midVotes: 0,
    mids: 0,
    oldVotes: 0,
    olds: 0
  })
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
youth: 4,
midVotes: 3,
mids: 4,
oldVotes: 3,
olds: 4 
}
*/