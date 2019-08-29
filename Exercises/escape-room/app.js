const readline = require("readline-sync")

const init =`YOU FIND YOURSELF IN A LOCKED ROOM.

THERE IS A DOOR WITH AN ORNATE KEYHOLE.

THERE IS A HOLE IN THE WALL, LARGE ENOUGH TO PUT YOUR ARM IN. YOU CAN'T SEE INSIDE.
IT IS COVERED IN SPIDER WEBS, AND WHAT APPEARS TO BE DRIED BLOOD.`

console.log(init)

const choices = ["Put your hand in the hole", "Look for the key", "Try to open the door"]
let outcome = "";
const dead = "YOU DIED!! (LOL)";
const escape = "YOU OPEN THE DOOR AND ESCAPE TO FREEDOME. YAY!";
while (!outcome) {
    let choiceIndex = readline.keyInSelect(choices, "What do you do? ")
    if (choiceIndex === 0) {
        console.log(`YOU PUT YOUR HAND IN THE HOLE. SOMETHING EATS IT.`)
        outcome = dead;      
    } else if (choiceIndex === 1) {
        console.log("YOU FIND THE KEY ON THE GROUND RIGHT IN FRONT OF YOU!")
        outcome = escape;
    } else if (choiceIndex === 2) {
        console.log("YOU TRY TO OPEN THE DOOR. ITS LOCKED, AND VERY STURDY. NOTHING HAPPENS")
    } else {
        console.log("YOU THINK ABOUT IT FOR A WHILE. NOTHING NEW COMES TO MIND\n")
        console.log(init)
    }

}

console.log(outcome)