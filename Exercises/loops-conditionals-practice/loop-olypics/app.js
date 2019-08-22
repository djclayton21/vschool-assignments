//Prelims

//1
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

//2
// for (let i = 9; i >= 0; i--) {
//     console.log(i);
// }

//3

// let fruit = ["banana", "orange", "apple", "kiwi"]

// for(let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
// }

//Bronze
//1
// let array = [];

// for (let i = 0; i < 10; i++) {
//     array.push(i);
// }
// console.log(array);

//2
// let array2 = [];

// for(let i = 0; i <= 100; i++){
//     if (i % 2 === 0){
//         array2.push(i);
//     }
// }

// console.log(array2);

//3
// let fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
// let fruit2 = [];

// for(let i = 0; i < fruit.length; i++){ 
//     if (i % 2 === 0){
//         fruit2.push(fruit[i]);
//     }
// }

// console.log(fruit2);

//silver

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
]
  
//1
// const names = [];
// for(let i = 0; i < peopleArray.length; i++) {
//     names.push(peopleArray[i].name);
// }
// console.log(names);

//2
// const names = [];
// const occupations = [];
// for(let i = 0; i < peopleArray.length; i++) {
//     names.push(peopleArray[i].name);
//     occupations.push(peopleArray[i].occupation);
// }
// console.log(names);
// console.log(occupations);

const names = [];
const occupations = [];

let j 
let k 

console.log(k);
for(let i = 0; i < peopleArray.length; i++) {
     if (peopleArray[i].name === "Harrison Ford"){
        names.push(peopleArray[i].name);
        for(let j = i; j < peopleArray.length; j++) {
            if((j - i) % 2 === 0) {
                names.push(peopleArray[i].name);
            }
        }
    } 

    if (peopleArray[i].occupation === "Singer"){
        occupations.push(peopleArray[i].occupation);
        for(let j = i; j < peopleArray.length; j++){
            if((j - i) % 2 === 1){
                occupations.push(peopleArray[i].occupation);
            }
        }
    }
}
console.log(names);
console.log(occupations);
