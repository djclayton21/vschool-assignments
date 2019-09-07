const readline = require('readline-sync')

//////settings/////////////////////
    const battleChance = 4 /// chance of an encounter, 1 in x

    const enemyDmgFactor = 2; ///multiplies by attack
    const enemyDefFactor = 2; //multiplies by defense
    const playerDmgFactor = 10;
    const playerDefFactor = 10;
    const keyFactor = 10; //increase chance of keys dropping
//

//variables////////////////////////////////////////////////////////////////

let gameover = false
let battle = false

//data///////////////////////////////////////
const rock = {
    name: "rock",
    description: "Its a rock. Kind of cute.",
    useEffect: "none",
    effectAmount: 0,
    isUnique: false,
    quantity: 1
}
const copperKey = {
    name: "copper key",
    description: "An old-looking copper key. You might as well hang on to this.",
    useEffect: "none",
    effectAmount: 0,
    isUnique: true,
    quantity: 1
}
const silverKey = {
    name: "silver key",
    description: "A well-crafted silver key. You should hang on to this.",
    useEffect: "none",
    effectAmount: 0,
    isUnique: true,
    quantity: 1
}
const goldenKey = {
    name: "golden key",
    description: "An ornate golden key. You should definitely hang on to this",
    useEffect: "none",
    effectAmount: 0,
    isUnique: true,
    quantity: 1
}
const minPotion = {
    name: "basic healing potion",
    description: "A common healing potion, often used by adventurers. Restores 100 HP.",
    useEffect: "restore hp",
    effectAmount: 100,
    isUnique: false,
    quantity: 5
}
const maxPotion = {
    name: "max power healing potion",
    description: "A rare potion that will restore 1000 HP",
    useEffect: "restore hp",
    effectAmount: 1000,
    isUnique: false,
    quantity: 1
}

const enemies = [
    {
        name: "Slime",
        baseLevel: 1,
        baseHealth: 50,
        baseAttack: 5,
        baseDefense: 5,
        description: "Easy pickings, but gross",
        drops: [{item: rock, chance: 50},{item: minPotion, chance: 10}, {item: copperKey, chance: 20 * keyFactor}]
    },
    {
        name: "Goblin",
        baseLevel: 2,
        baseHealth: 100,
        baseAttack: 20,
        baseDefense: 10,
        description: "A little asshole",
        drops: [{item: rock, chance: 50}, {item: minPotion, chance: 20}, {item: maxPotion, chance: 10}, {item: silverKey, chance: 20 * keyFactor}]
    },
    {
        name: "Kobold",
        baseLevel: 2,
        baseHealth: 100,
        baseAttack: 10,
        baseDefense: 20,
        description: "Kinda cute, but tough",
        drops: [{item: rock, chance: 50}, {item: minPotion, chance: 20}, {item: maxPotion, chance: 10}, {item: silverKey, chance: 20 * keyFactor}]
    },
    {
        name: "Orc",
        baseLevel: 3,
        baseHealth: 500,
        baseAttack: 50,
        baseDefense: 50,
        description: "Big angry pig dude",
        drops: [{item: rock, chance: 50}, {item: minPotion, chance: 100}, {item: maxPotion, chance: 50}, {item: goldenKey, chance: 20 * keyFactor}]
    }   
]
////Player Creation///////
const player = {
    name: '',
    level: 1,
    health: 1000,
    maxHealth: 1000,
    experience: 0,
    attack: 20,
    defense: 20,
    items: [Object.assign({}, minPotion)]
}

//functions////////////////////////////////////////////////////////////////

//utility///////////////////////////////////
function quit(){
    console.clear()
    if (readline.keyInYNStrict('Are you sure you want to quit the game? You cannot save.')){
        gameOver()
    }
}

function gameOver(){
    battle = false
    gameover = true
    console.clear()
    console.log('Game Over :(')
}

function resume(){
    console.clear()
}

function rng(chance = 100){//return random number 0 to chance, default 100
    return Math.floor(Math.random() * chance)
}

function youDied(){
    console.log(`You died. There is nothing on the other side.`)
    console.log('***** desplay results/stats?')
    readline.keyInPause('')
}

function checkVictory(){
    let isCopper = false
    let isSilver = false
    let isGolden = false
    for (let i = 0; i < player.items.length; i++){
        if (player.items[i].name === "copper key"){
            isCopper = true
            continue
        }
        if (player.items[i].name === "silver key"){
            isSilver = true
            continue
        }
        if (player.items[i].name === "golden key"){
            isGolden = true
            continue
        }
    }
    if (isCopper && isSilver && isGolden) {
        console.log("***** you found all the keys! You win!")
        readline.keyInPause()
        gameOver()
    }
}
//movement///////////////////////////////////
//move forward
function forward(){
    console.clear()
    //check path?
    console.log('You move forward.')
    //encounter
    if (rng(battleChance) === 0) {
        encounter()
    }
    //update location? 
}

//inventory//////////////////////////////////
function inventory(){
    console.clear()
    console.log('Inventory')
    //items
    for (let i = 0; i < player.items.length; i++){
        console.log(`[${i}] ${player.items[i].name} (${player.items[i].quantity})`)
    }
    console.log('[x] Exit')
    const choice = readline.keyIn('>>>', {limit: ['x']})
    if (choice === 'x') {
        resume()
    }
    //use item?
}
function itemToInventory(drop) {
    let isNewItem = true;
    player.items.forEach(item => {
        if (drop.name === item.name) {
            item.quantity += drop.quantity;
            isNewItem = false;
        }
    })
    if (isNewItem) {
        player.items.push(drop);
    }
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
function encounter(){
    let enemy = new Enemy(enemies[rng(enemies.length)])
    battle = true;
    console.log(enemy)
    while (battle){
        battleRound(enemy)
        if (battle){
        console.log('*****Round over')
            if (enemy.health <= 0){
                battle = false
                console.log('*****you win!')
                readline.keyInPause()
                battleResolve(enemy)
            } else if (player.health <= 0){
                youDied()
                gameOver()
            }
        }
    }
    //items/xp
    //resolve
        //inventory
        //character
}
function battleResolve(enemy) {
    const xp = enemy.experience();
    console.log(`You gained ${xp} experience points!`)
    readline.keyInPause()
    const drops = [];
    for (let i = 0; i < enemy.drops.length; i++) {
        let isDropped = false
        if (enemy.drops[i].chance > rng(100)){
            isDropped = true
        }
        if (isDropped){
            for (let j = 0; j < player.items.length; j++){
                if (enemy.drops[i].item.isUnique && (enemy.drops[i].item.name === player.items[j].name)){
                    isDropped = false
                }
            }  
        }
        if (isDropped){
            drops.push(Object.assign({}, enemy.drops[i].item))
        }
    }
    console.log('The enemy dropped:')
    console.log(drops)
    readline.keyInPause()
    drops.forEach(itemToInventory)
}
//random enemy constructor
function Enemy(enemyObj){
    this.name = enemyObj.name
    this.level = enemyObj.baseLevel
    this.health = enemyObj.baseHealth
    this.maxHealth = enemyObj.baseHealth
    this.attack = enemyObj.baseAttack
    this.defense = enemyObj.baseDefense
    this.description = enemyObj.description
    this.drops = enemyObj.drops
}
Enemy.prototype.experience = function () {
    let xp = this.maxHealth + this.attack + this.defense
    return xp
}
//round
function battleRound(enemy){
    console.log('[a] Attack [r] Run [i] Inventory [q] quit')//talk?
    let choice = 0
    choice = readline.keyIn('>>>', {limit: ['a','r','i','q']})
    if (choice === 'q'){
        quit()
    } else if (choice === 'a'){
        playerAttack(enemy)
        enemyAttack(enemy)
    } else if (choice === 'r'){
        run(enemy)
    } else if (choice === 'i'){
        inventory()
    }
}
//attack
function playerAttack(enemy){
    console.clear()
    let dmg = player.attack * (1 + rng(playerDmgFactor)) - enemy.defense * (1 + rng(enemyDefFactor))
    if (dmg < 0){
        dmg = 0;
    }
    console.log(`player hit: ${dmg}`)
    enemy.health += -dmg;
    console.log(`Enemy: ${enemy.health}/${enemy.maxHealth} HP`)
}
function enemyAttack(enemy){
    let dmg = enemy.attack * (1 + rng(enemyDmgFactor)) - player.defense * (1 + rng(playerDefFactor))
    if (dmg < 0){
        dmg = 0;
    }
    console.log(`enemy hit ${dmg}`)
    player.health += -dmg;
    console.log(`Player: ${player.health}/${player.maxHealth}`)
}
//run
function run(enemy){
    console.clear()
    console.log('*** you try to run')
    if (rng(2) === 0){
        console.log('***** you fail')
        enemyAttack(enemy)
    } else {
        battle = false
        console.log('**** you got away')
    }

}

/////////////////////////////////////////////////////////////////////////
//game///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

//greet////////////////////
console.log('Welcome')

//get name////////////////////
player.name = readline.question('Name? ')
console.log(player.name)

//character creation?

//choose difficulty?

//walking around
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
    checkVictory()
}  

//turn left/right?
    //update direction




        

    

