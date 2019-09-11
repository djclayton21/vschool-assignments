
class Player {
    constructor(name, totalCoins, status, hasStar){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
        this.gameActive = true
    }
    setName(namePicked) {
        if (namePicked === "Mario"){
            this.name = "Mario"
        } else if (namePicked === "Luigi") {
            this.name = "Luigi"
        }
    }
    gotHit() {
        switch (this.status) {
            case "Powered Up":
                this.status = "Big"
                break;
            case "Big":
                this.status = "Small"
                break;
            case "Small":
                this.status = "Dead"
                this.gameActive = false
                break;
            default:
        }
    }
    gotPowerup(){
        switch (this.status) {
            case "Small":
                this.status = "Big"
                break;
            case "Big":
                this.status = "Powered Up"
                break;
            case "Powered Up":
                this.hasStar = true
                break;
            default:
        }
    }
    addCoin(){
        this.totalCoins++
    }
    print(){
        console.log(`Name: ${this.name}`)
        console.log(`Coins: ${this.totalCoins}`)
        console.log(`Status: ${this.status}`)
        console.log(`Star?: ${this.hasStar}`)
    }

}

const newPlayer = new Player('Mario', 0, "Big", false);

function whatHappens(player) {
    const random = Math.floor(Math.random() * 3);
    if (random === 0){
        player.gotHit()
    } else if (random === 1){
        player.gotPowerup()
    } else if (random === 2){
        player.addCoin()
    }
    player.print()
}

const intervalID = setInterval(whatHappens, 1000, newPlayer)

const checkID = setInterval(endGame, 1000, newPlayer)

function endGame(player) {
    if (!player.gameActive) {
        clearInterval(intervalID)
        clearInterval(checkID)
    }
}



