const dogProfile = {
    name: "Roxie",
    breed: "boxer",
    size: "medium",
    playmates:[
        {
            name: "Fido",
            breed: "chihuahua",
            size: "small",
            playmates:[],
            playsWithSize: function(){
                if (this.size === "large") {
                    return ["large", "medium"]
                } else if (this.size === "medium") {
                    return ["large", "medium", "small"]
                } else if (this.size === "small") {
                    return ["medium", "small"]
                } else {
                    return ["unknown playmate size"]
                }
            }

        },
        {
            name: "Princess",
            breed: "doberman",
            size: "large",
            playmates: [
                {
                    name: "Meatloaf",
                    breed: "bulldog",
                    size: "medium",
                    playmates: [],
                    playsWithSize: function(){
                        if (this.size === "large") {
                            return ["large", "medium"]
                        } else if (this.size === "medium") {
                            return ["large", "medium", "small"]
                        } else if (this.size === "small") {
                            return ["medium", "small"]
                        } else {
                            return ["unknown playmate size"]
                        }
                    } 
                }
            ],
            playsWithSize: function(){
                if (this.size === "large") {
                    return ["large", "medium"]
                } else if (this.size === "medium") {
                    return ["large", "medium", "small"]
                } else if (this.size === "small") {
                    return ["medium", "small"]
                } else {
                    return ["unknown playmate size"]
                }
            }
        }
    ],
    playsWithSize: function(){
        if (this.size === "large") {
            return ["large", "medium"]
        } else if (this.size === "medium") {
            return ["large", "medium", "small"]
        } else if (this.size === "small") {
            return ["medium", "small"]
        } else {
            return ["unknown playmate size"]
        }
    }

    
}

dogProfile.favoriteFoods = ["cheetos", "hotdogs", "slippers"];

dogProfile.playmates[1].playmates[0].smellsLike = "roses";

dogProfile.playmates[0].playmates.push({
    name: "Renee",
    breed: "collie",
    size: "medium",
    smellsLike: 'wet dog'
})

dogProfile.playmates[1].playmates[0].favoriteFoods = ["meat"];
dogProfile.playmates[1].playmates[0].favoriteFoods.push("bones");


console.log(dogProfile.playmates[1].playmates[0].favoriteFoods);
// console.log(dogProfile.playmates[1].playmates[0].playsWithSize());