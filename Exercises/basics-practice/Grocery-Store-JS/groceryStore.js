const shopper = {
    name: "George",
    age: 25,
    isMarried: true,
    babyAdvertisement: function(){
        if(this.isMarried){
            return true
        } else {
            return "hurry up and get married!"
        }
    },
    groceryCart: ["oats", "bananas", "peanut butter", "coffee", "chicken", "rice"]
};
shopper.isMarried = false;
console.log(shopper.babyAdvertisement());