//// test for screen
let gameover = false
let battle = false
let screenText = []
let statusText = []
let menuText = []

const player = {
    name: '',
    level: 1,
    health: 500,
    maxHealth: 500,
    experience: 0,
    levelUpXp: 200,
    attack: 15,
    defense: 15,
    items: []
}

const blankMenu =[
    '***************************************************************************',
    '*                                                                         *',
    '***************************************************************************',
]
menuText = blankMenu
const blankStatus = [
    '***************************************************************************',
    '*                                                                         *',
    '*                                                                         *',
    '*                                                                         *',
    '*                                                                         *',
    '***************************************************************************',
]
test = ['[w] Move Forward    [s] Status    [i] Inventory    [q]quit']

function editMenu(arr){
    for (let i = 0; i < arr.length; i++) {
        menuText[i + 1] = menuText[i + 1].slice(0, 3)
        menuText[i + 1] += arr[i];
        
        for (let j = menuText[i+1].length; j < 74; j++){
            menuText[i+1] += ' ';
        }
        menuText[i+1]+= '*'
    }
}
editMenu(test)

console.log(menuText[0])
console.log(menuText[1])
console.log(menuText[2])
/////////////////////////////////////////////////////////////////////////
//game///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

//greet////////////////////
// //greet////////////////////
// screenText = `You awake in an ancient forest. Looking around, you have no memory of how you got there. Actually, you don't seem to remember much at all of your life before, only hazy images of violence and monsters.`
// console.log(screenText)
// readline.keyInPause()
// screenText = `You seem to be dressed for travel, with a large backpack and sturdy clothing. In the backpack you have plenty of food, water, a sleeping bag, and some vials of red liquid that give off a faint glow. `
// console.log(screenText)
// readline.keyInPause()
// screenText = `Without any better options, you decide to set off across the forest in search of others like you. First however, you must decide what you will call yourself.`
// console.log(screenText)
// readline.keyInPause()

// //get name////////////////////
// console.clear()
// player.name = readline.question('What is your name? ')
// screenText = `OK. ${player.name} seems like a good strong name. You'll go with that for now. With that decided, you set off on your journey...`
// console.log(screenText)
// readline.keyInPause()
// player.items.push(Object.assign({}, minPotion))///start with healing potions

// //walking around
// while (!gameover) {
//     console.clear()
//     screenText = "Little has changed. You contemplate your next move."
//     console.log(screenText)
//     menuText = '[w] Move Forward [s] Status [i] Inventory [q] quit'
//     // console.log(menuText)
//     // let choice = 0
//     // choice = readline.keyIn( '>>>', {limit: ['w','s','i','q']})
//     // //forward
//     // if (choice === 'w') {
//     //     forward()
//     // } 
//     // //status
//     // else if (choice === 's'){
//     //     status()
//     // }

//     // //inventory
//     // else if (choice === 'i'){
//     //     inventory()
//     // }
//     // //camp?
//     // //quit
//     // else if (choice === 'q') {
//     //     quit()
//     // }
//     // checkVictory()
//     gameover = true;
// }  