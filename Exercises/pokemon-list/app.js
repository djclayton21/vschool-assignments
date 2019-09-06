// get data///////////
const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
        const data = JSON.parse(xhr.responseText)
        const originalPokemon = []
        for (let i = 0; i <= 130; i++){
            originalPokemon.push(data.objects[0].pokemon[i])
        }
        display(originalPokemon)
        console.dir(data)
        console.dir(originalPokemon)
    }
}
//display data/////////
function display(arr){
    for (let i = 0; i < arr.length; i++){
        const pokemon = document.createElement("div")
        pokemon.textContent = arr[i].name 
        document.body.appendChild(pokemon)
    }
}
//add details///////////
const xhrDetails = new XMLHttpRequest()

xhrDetails.open("GET", "https://pokeapi.co/api/v1/pokemon/19/",true)
xhrDetails.send()
xhrDetails.onreadystatechange = function(){
    if (xhrDetails.readyState === 4 && xhrDetails.status){
        const data = JSON.parse(xhr.responseText)
    }
    console.log(data)
}