const shopper = {
    name: "George",
    age: 25,
    isMarried: true,
    babyAdvertisement: function(){
        if(this.isMarried){
            return true
        } else {
            return false
        }
    },
    groceryCart: ["oats", "bananas", "peanut butter", "coffee", "chicken", "rice"]
};

console.log(shopper.groceryCart[3]);