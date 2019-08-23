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

// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
// ]
  
// //1
// // const names = [];
// // for(let i = 0; i < peopleArray.length; i++) {
// //     names.push(peopleArray[i].name);
// // }
// // console.log(names);

// //2
// // const names = [];
// // const occupations = [];
// // for(let i = 0; i < peopleArray.length; i++) {
// //     names.push(peopleArray[i].name);
// //     occupations.push(peopleArray[i].occupation);
// // }
// // console.log(names);
// // console.log(occupations);

// let names = [];
// let occupations = [];

// let nameIndex
// let jobIndex

// console.log(nameIndex < 1);
// for(let i = 0; i < peopleArray.length; i++) {

//     if(peopleArray[i].name === "Harrison Ford"){
//         names.push(peopleArray[i].name);
//         nameIndex = i;
//     }
//     if(peopleArray[i].occupation === "Singer"){
//         occupations.push(peopleArray[i].occupation);
//         jobIndex = i;
//     }
//     if(nameIndex < i && (i - nameIndex) % 2 === 0) {
//         names.push(peopleArray[i].name);
//     }
//     if(jobIndex < i && (i- jobIndex) % 2 === 0) {
//         occupations.push(peopleArray[i].occupation);
//     }
// }

// console.log(nameIndex, jobIndex);
// console.log(names);
// console.log(occupations);

//gold
//1 

// let grid = [];
// for(i = 0; i < 3; i++){
//     grid[i] = [];
//     for(j = 0; j < 3; j++) {
//       grid[i][j] = 0;

//     }
// }
// console.log(grid);

//2
// let grid = [];
// for(i = 0; i < 3; i++){
//     grid[i] = [];
//     for(j = 0; j < 3; j++) {
//       grid[i][j] = i;

//     }
// }
// console.log(grid);

//3
// let grid = [];
// for(i = 0; i < 3; i++){
//     grid[i] = [];
//     for(j = 0; j < 3; j++) {
//       grid[i][j] = j;

//     }
// }
// console.log(grid);

// //4
let grid = [];
for(i = 0; i < 8; i++){
    grid[i] = [];
    for(j = 0; j < 2; j++) {
      grid[i][j] = 0;

    }
}
console.log(grid);

let gridX = grid;
// console.log(gridX.length);
// console.log(gridX[0].length);
for (i = 0; i < gridX.length; i++) {
  for( j = 0; j < gridX[0].length; j++){
    gridX[i][j] = "x";
  }
}
console.log(gridX);



