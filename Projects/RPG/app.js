const readline = require('readline-sync')
//TODO//////////////
//graphics!
    //screen
        //text info
        //status
        //options
    //monster pictures
//map
    //update ending
//more monsters
//boss


//////settings/////////////////////
    const battleChance = 3 /// chance of an encounter, 1 in x

    //battle balance, default to 10
    const enemyDmgFactor = 15; ///increases max de
    const enemyDefFactor = 15; //increases max attack
    const playerDmgFactor = 15;
    const playerDefFactor = 15;

    const keyFactor = 1; //increase chance of keys dropping
    const levelUpGrowthFactor = 1;
    const levelUpExperienceFactor = 2;
    const enemySpawnBonus = 1;

//variables////////////////////////////////////////////////////////////////

let gameover = false
let battle = false

////Player///////////////////////
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

//game data///////////////////////////////////////
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
    name: "full healing potion",
    description: "A rare potion that will restore you to full health",
    useEffect: "restore hp",
    effectAmount: player.maxHealth,
    isUnique: false,
    quantity: 1
}

const enemies = [
    {
        name: "Slime",
        baseLevel: 1,
        baseHealth: 10,
        baseAttack: 5,
        baseDefense: 5,
        description: "You step on a slime. Its not very threatening, but it won't let go of your boot. ",
        drops: [{item: rock, chance: 50},{item: minPotion, chance: 10}, {item: copperKey, chance: 20 * keyFactor}]
    },
    {
        name: "Goblin",
        baseLevel: 3,
        baseHealth: 250,
        baseAttack: 20,
        baseDefense: 10,
        description: "A goblin was lying in wait. He looks annoying. ",
        drops: [{item: rock, chance: 50}, {item: minPotion, chance: 20}, {item: maxPotion, chance: 10}, {item: silverKey, chance: 20 * keyFactor}]
    },
    {
        name: "Kobold",
        baseLevel: 3,
        baseHealth: 250,
        baseAttack: 10,
        baseDefense: 20,
        description: "A kobold attacks with a howl. He's fluffy and rather cute, but seems tough. ",
        drops: [{item: rock, chance: 50}, {item: minPotion, chance: 20}, {item: maxPotion, chance: 10}, {item: silverKey, chance: 20 * keyFactor}]
    },
    {
        name: "Orc",
        baseLevel: 5,
        baseHealth: 450,
        baseAttack: 30,
        baseDefense: 30,
        description: "An orc charges out of nowhere. He's terrifying, and smells faintly of bacon",
        drops: [{item: rock, chance: 50}, {item: minPotion, chance: 100}, {item: maxPotion, chance: 50}, {item: goldenKey, chance: 20 * keyFactor}]
    }   
]

////Text//////
const blankStatus = [
    '*                                                                         *',
    '*                                                                         *',
    '*                                                                         *',
    '*                                                                         *',
    '***************************************************************************',
]
const blankMenu =[
    '*                                                                         *',
    '***************************************************************************',
]
const blankScreen = [
    '***************************************************************************',
    '*                                                                         *',
    '*                                                                         *',
    '*                                                                         *',
    '*                                                                         *',
    '*                                                                         *',
    '*                                                                         *',
    '*                                                                         *',
    '*                                                                         *',
    '*                                                                         *',
    '*                                                                         *',
    '*                                                                         *',
    '*                                                                         *',
    '*                                                                         *',
    '*                                                                         *',
    '*                                                                         *',
    '*                                                                         *',
    '*                                                                         *',
    '*                                                                         *',
    '***************************************************************************'
]

let screenText = [...blankScreen]
let statusText = [...blankStatus]
let menuText = [...blankMenu]

//functions////////////////////////////////////////////////////////////////

//utility///////////////////////////////////
function quit(){
    newScreenText = parse('Are you sure you want to quit the game? You cannot save. [y/n]')
    editScreen(newScreenText)
    printAll()
    if (readline.keyInYNStrict('>>>')){
        gameOver()
    }
}

function gameOver(){
    battle = false
    gameover = true
    newScreenText = ["Your journey has ended. Thank you for playing!"]
    editScreen(newScreenText)
    printAll()
}

function rng(chance = 100){//return random number 0 to chance, default 100
    return Math.floor(Math.random() * chance)
}

function youDied(){
    newScreenText = parse("The last of your life energy whithers away. As the world fades into darkness, your only regret is that you still don't know how you got here.")
    editScreen(newScreenText)
    printAll()
    readline.keyInPause()
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
        newScreenText = parse("After picking up the third key, a door with three keyholes appears out of thin air. The keys turn smoothly, and you walk through into a comfortable, warm light.")
        editScreen(newScreenText)
        printAll()
        readline.keyInPause()
        newScreenText = parse("You still have no idea how you ended up in that forrest, but as the light embraces you, your only thought is that you're glad to have escaped.")
        editScreen(newScreenText)
        printAll()
        readline.keyInPause()
        gameOver()
    }
}
//text display//////////////////////////
function printAll(){
    console.clear()
    const all = screenText.concat(statusText).concat(menuText)
    for (let i = 0; i < all.length; i++){
        console.log(all[i])
    }
}
function parse(str){
    let arr = str.split(" ")
    let result = [""]
    while (arr.length) {
        for(let i = 0; i < result.length; i++){
            if (result[i].length <= 55){
                result[i]+= (" " + arr.shift())
            } else if (!result[i + 1]){
                result.push("")
            }
        }
    }
    return result
}
function editMenu(arr){
    menuText = [...blankMenu]
    for (let i = 0; i < arr.length; i++) {
        menuText[i] = menuText[i].slice(0, 3)
        menuText[i] += arr[i];
        
        for (let j = menuText[i].length; j < 74; j++){
            menuText[i] += ' ';
        }
        menuText[i]+= '*'
    }
}
function editStatus(arr){
    statusText = [...blankStatus]
    for (let i = 0; i < arr.length; i++) {
        statusText[i + 1] = statusText[i + 1].slice(0, 3)
        statusText[i + 1] += arr[i];
        
        for (let j = statusText[i +1 ].length; j < 74; j++){
            statusText[i + 1] += ' ';
        }
        statusText[i + 1]+= '*'
    }
}
function editStatusRight(arr){
    for (let i = 0; i < arr.length; i++) {
        statusText[i + 1] = statusText[i + 1].slice(0, 40)
        statusText[i + 1] += arr[i];
        
        for (let j = statusText[i + 1].length; j < 74; j++){
            statusText[i + 1] += ' ';
        }
        statusText[i + 1]+= '*'
    }
}
function editScreen(arr) {
    screenText = [...blankScreen]
    for (let i = 0; i < arr.length; i++) {
        screenText[i + 3] = screenText[i + 3].slice(0, 4)
        screenText[i + 3] += arr[i];
        
        for (let j = screenText[i + 3].length; j < 74; j++){
            screenText[i + 3] += ' ';
        }
        screenText[i + 3]+= '*'
    }
}


//movement///////////////////////////////////
//move forward
function forward(){
    //check path?
    newScreenText = ["You travel onward."]
    editScreen(newScreenText)
    printAll()
    readline.keyInPause()
    //encounter
    if (rng(battleChance) === 0) {
        encounter()
    }
}

//inventory//////////////////////////////////
function inventory(){
    let newScreenText = [" Inventory:"]
    //items
    for (let i = 0; i < player.items.length; i++){
        newScreenText.push(...parse(`[${i}] ${player.items[i].name}(${player.items[i].quantity})`))
    }
    editScreen(newScreenText)
    let newMenuText = ['[#] Inspect Item     [x] Exit']
    editMenu(newMenuText)
    printAll()
    let choice = readline.keyIn('>>>', {limit: ['x','$<0-9>']})
    if (choice === 'x') {
    } else {
        choice = parseInt(choice, 10);
        itemInfo(choice)
    }
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
function itemInfo(choice){
    if (!player.items[choice]) {
        newScreenText = ['There is no item in that slot!']
        editScreen(newScreenText)
        printAll()
    } else {
        newScreenText = [ `Item: ${player.items[choice].name}(${player.items[choice].quantity})`]
        newScreenText.push(...parse(`Description: ${player.items[choice].description}`))
        let newMenuText = [`[u] Use Item     [x] Exit`]
        editScreen(newScreenText)
        editMenu(newMenuText)
        printAll()
        use = readline.keyIn(`>>>`, {limit: ['u','x']})
        if (use === 'u') {
            itemUse(player.items[choice])
        } else if (use === 'x'){
        }
    }
}
function itemUse(item){
    if (item.useEffect === "none"){
        newScreenText = [`The ${item.name} doesn't do anything in this situation`]
        editScreen(newScreenText)
        printAll()
    } else if (item.useEffect === 'restore hp'){
        player.health += item.effectAmount;
        if (player.health > player.maxHealth){
            player.health = player.maxHealth
        }
        item.quantity--
        newScreenText = [`You use one ${item.name}.`]
        editScreen(newScreenText)
        printAll()
    }
    let newStatusText = []
    newStatusText.push(`${player.name}     Level ${player.level}`)
    newStatusText.push(`${player.health}/${player.maxHealth} HP   ${player.attack} Atk   ${player.defense} Def`)
    editStatus(newStatusText)
    printAll()
    for (let i = 0; i < player.items.length; i++){
        if (player.items[i].quantity <= 0){
            player.items.splice(i, 1)
        }
    }
}
//check status////////////////
function status(){
    let newScreenText =[` ${player.name} Lvl: ${player.level}`]
    newScreenText.push([` HP: ${player.health}/${player.maxHealth}`])
    newScreenText.push([` XP: ${player.experience}/${player.levelUpXp}`])
    newScreenText.push([` Attack: ${player.attack}`])
    newScreenText.push([` Defense: ${player.defense}`])
    newScreenText.push(...parse("Description: You haven't come across anything reflective yet, so you don't actually know what you look like. You assume that you're very attractive."))
    let newMenuText = [`[x] Exit`]
    editScreen(newScreenText)
    editMenu(newMenuText)
    printAll()
    const choice = readline.keyIn('>>>', {limit: ['x']})
    if (choice === 'x') {
    }
}
//battle////////////////////////////////////////////
function encounter(){
    let enemy = new Enemy(enemies[rng(enemies.length)])
    battle = true;

    newScreenText = ["An enemy appears!"]
    editScreen(newScreenText)
    printAll()
    readline.keyInPause()

    newScreenText = parse(enemy.description)
    editScreen(newScreenText)
    printAll()
    readline.keyInPause()
    while (battle){
        let newStatusText = []
        newStatusText.push(`${player.name}     Level ${player.level}`)
        newStatusText.push(`${player.health}/${player.maxHealth} HP   ${player.attack} Atk   ${player.defense} Def`)
        editStatus(newStatusText)
        newStatusText = []
        newStatusText.push(`${enemy.name}     Level ${enemy.level}`)
        newStatusText.push(`${enemy.health}/${enemy.maxHealth} HP   ${enemy.attack} Atk   ${enemy.defense} Def`)
        editStatusRight(newStatusText)
        
        battleRound(enemy)
        if (battle){
            if (enemy.health <= 0){
                battle = false
                newScreenText = [`The ${enemy.name} collapses.`]
                editScreen(newScreenText)
                printAll()
                readline.keyInPause()
                battleResolve(enemy)
            } else if (player.health <= 0){
                youDied()
                gameOver()
            }
        }
    }
}
function battleResolve(enemy) {
    const xp = enemy.experience();
    player.experience += xp;

    newScreenText = [`You gained ${xp} experience points!`]
    editScreen(newScreenText)
    
    let newStatusText = []
    newStatusText.push(`${player.name}     Level ${player.level}`)
    newStatusText.push(`${player.health}/${player.maxHealth} HP   ${player.attack} Atk   ${player.defense} Def`)
    editStatus(newStatusText)
    printAll()
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
    if (drops.length === 0) {
        newScreenText = [`The ${enemy.name} wasn't carrying anything useful`]
        editScreen(newScreenText)
        printAll()
    } else {
        newScreenText = [`The ${enemy.name} dropped:`]
        for (let i = 0; i < drops.length; i++){
            newScreenText.push(`${drops[i].name}(${drops[i].quantity})`)
        }
        editScreen(newScreenText)
        printAll()
    }
    readline.keyInPause()
    drops.forEach(itemToInventory)

    checkLevelUp()
}
function checkLevelUp(){
    if (player.experience >= player.levelUpXp) {
        player.level++
        player.experience+=  -player.levelUpXp
        player.levelUpXp+= player.levelUpXp * (levelUpExperienceFactor / 2)
        player.maxHealth+= rng(100 * levelUpGrowthFactor)
        player.health = player.maxHealth
        player.attack+= rng(10 * levelUpGrowthFactor)
        player.defense+= rng(10 * levelUpGrowthFactor)

        newScreenText = [`You are now level ${player.level}!`]
        editScreen(newScreenText)
        printAll()
        readline.keyInPause()
    }
}
function Enemy(enemyObj){
    this.name = enemyObj.name
    this.level = enemyObj.baseLevel
    this.health = enemyObj.baseHealth + rng(100 * enemySpawnBonus)
    this.maxHealth = this.health
    this.attack = enemyObj.baseAttack + rng(10 * enemySpawnBonus)
    this.defense = enemyObj.baseDefense + rng(10 * enemySpawnBonus)
    this.description = enemyObj.description
    this.drops = enemyObj.drops
}
Enemy.prototype.experience = function () {
    let xp = this.maxHealth + this.attack + this.defense
    return xp
}
function battleRound(enemy){

    let newScreenText = [`You eye the ${enemy.name}, and consider your next move.`]
    editScreen(newScreenText)    
    let newMenuText = ['[a] Attack     [r] Run     [i] Inventory     [q] quit game ']
    editMenu(newMenuText)
    printAll()

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
function playerAttack(enemy){
    let dmg = Math.floor(player.attack * (1 + rng(playerDmgFactor) / 10)) - Math.floor(enemy.defense * (1 + rng(enemyDefFactor) / 10))
    if (dmg < 0){
        dmg = 0;
    }
    enemy.health += -dmg;
    newScreenText = [`You attack for ${dmg} damage!`]
    editScreen(newScreenText)
    printAll()
    readline.keyInPause()
}
function enemyAttack(enemy){
    let dmg = Math.floor(enemy.attack * (1 + rng(enemyDmgFactor) / 10)) - Math.floor(player.defense * (1 + rng(playerDefFactor) / 10))
    if (dmg < 0){
        dmg = 0;
    }
    player.health += -dmg;
    newScreenText = [`The ${enemy.name} attacked you for ${dmg} damage!`]
    editScreen(newScreenText)
    printAll()
    readline.keyInPause()
}
function run(enemy){
    newScreenText = [` You attempt to flee.`]
    if (rng(2) === 0){
        newScreenText.push("")
        newScreenText.push(...parse(`You are unable to escape. The ${enemy.name} gets in an attack while your back is turned!`))
        editScreen(newScreenText)
        printAll()
        readline.keyInPause()
        enemyAttack(enemy)
    } else {
        battle = false
        newScreenText.push("")
        newScreenText.push(...parse(`You are able to escape. After hiding until the ${enemy.name} is gone, you resume your journey.`))
        editScreen(newScreenText)
        printAll()
        readline.keyInPause()
    }

}

/////////////////////////////////////////////////////////////////////////
//game///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

//greet////////////////////
let newScreenText = parse(`You awake in an ancient forest. Looking around, you have no memory of how you got there. Actually, you don't seem to remember much at all of your life before, only hazy images of violence and monsters.`)
editScreen(newScreenText)
printAll()
readline.keyInPause()
newScreenText = parse(`You seem to be dressed for travel, with a large backpack and sturdy clothing. In the backpack you have plenty of food, water, a sleeping bag, and some vials of red liquid that give off a faint glow. `)
editScreen(newScreenText)
printAll()
readline.keyInPause()
newScreenText = parse(`Without any better options, you decide to set off across the forest in search of others like you. First however, you must decide what you will call yourself.`)
editScreen(newScreenText)
printAll()
readline.keyInPause()

//get name////////////////////
newScreenText = parse('What will you call yourself?')
editScreen(newScreenText)
printAll()
player.name = readline.question('>>>')
while(player.name.length > 15) {
    newScreenText = parse("That name is too long, your memory is foggy as it is.")
    editScreen(newScreenText)
    printAll()
    readline.keyInPause()

    newScreenText = parse('What will you call yourself?')
    editScreen(newScreenText)
    printAll()
    player.name = readline.question('>>>')
}
newScreenText = parse(`OK. ${player.name} seems like a good strong name. You'll go with that for now. With that decided, you set off on your journey...`)
editScreen(newScreenText)
printAll()
readline.keyInPause()
player.items.push(Object.assign({}, minPotion))///start with healing potions

//walking around
while (!gameover) {
    newScreenText = parse("Little has changed. You contemplate your next move.")
    editScreen(newScreenText)
    let newMenuText =['[w] Move Forward     [s] Status     [i] Inventory     [q] quit']
    editMenu(newMenuText)
    let newStatusText = []
    newStatusText.push(`${player.name}     Level ${player.level}`)
    newStatusText.push(`${player.health}/${player.maxHealth} HP   ${player.attack} Atk   ${player.defense} Def`)
    editStatus(newStatusText)
    printAll()
    let choice = 0
    choice = readline.keyIn( '>>>', {limit: ['w','s','i','q']})
    //forward
    if (choice === 'w') {
        forward()
    } 
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