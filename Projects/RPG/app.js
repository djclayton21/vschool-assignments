const readline = require('readline-sync')

//variables////////////////////////////////////////////////////////////////
const player = {
    name: '',
    health: 1000,
    maxHealth: 1000,
    items: [{itemName: 'sleeping bag'},{itemName:'a weird rock'}]
}
let gameover = false
//////difficulty settings
    const battleChance = 4 /// chance of an encounter, 1 in x

//functions////////////////////////////////////////////////////////////////

//utility///////////////////////////////////
function quit(){
    console.clear()
    if (readline.keyInYNStrict('Are you sure you want to quit the game? You cannot save.')){
        gameOver()
    }
}

function gameOver(){
    console.clear()
    console.log('Game Over :(')
    gameover = true
}

function resume(){
    console.clear()
}

function rng(chance = 100){//return random number 0 to chance, default 100
    return Math.floor(Math.random() * chance)
}

//movement///////////////////////////////////
//move forward
function forward(){
    console.clear()
    //check path?
    //encounter
    if (rng(battleChance) === 0) {
        console.log('An enemy approaches!')
    }
    //update location?
    console.log('You move forward.')

}

//inventory//////////////////////////////////
function inventory(){
    console.clear()
    console.log('')
    //items
    for (let i = 0; i < player.items.length; i++){
        console.log(`[${i}] ${player.items[i].itemName}`)
    }
    console.log('[x] Exit')
    const choice = readline.keyIn('>>>', {limit: ['x']})
    if (choice === 'x') {
        resume()
    }
    //use item?
    //throw away?
}
//check status
function status(){
    console.clear()
    console.log('You check your status')
    //health
    console.log(`HP: ${player.health}/${player.maxHealth}`)
    //mp?
    //level?
    //stats?
    console.log('[x] Exit')
    const choice = readline.keyIn('>>>', {limit: ['x']})
    if (choice === 'x') {
        resume()
    }
}
//enemy encounter///////////////////////////
    //random enemy
    //wait
        //attack
            //damage given
            //enemy attack
            //update status
        //run
            //chance to run
            //enemy attack
            //update status
        //inventory?
            //use item?
        //round result
            //more fite
            //win
                //item drop
                //experience
            //lose
                //gameover

//game///////////////////////////////////////////////////////////////////

//greet////////////////////
console.log('Welcome')

//get name////////////////////
player.name = readline.question('Name? ')
console.log(player.name)

//character creation?

//choose difficulty?

//wait
while (!gameover) {
    console.log('You are outside')
    console.log('[w] Move Forward [s] Status [i] Inventory [q] quit')
    let choice = 0
    choice = readline.keyIn( '>>>', {limit: ['w','s','i','q']})
    //forward
    if (choice === 'w') {
        forward()
    } 
    //turn left?
    //turn right?

    //status
    else if (choice === 's'){
        status()
    }

    //inventory
    else if (choice === 'i'){
        inventory()
    }
    //camp?
    //quit
    else if (choice === 'q') {
        quit()
    }
}  

//turn left/right?
    //update direction




        

    

