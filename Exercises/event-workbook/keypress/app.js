/* You're task is to display to the user the key and key code they press

Example of output: You've pressed the "a" key. It's key code is 65

Wes Bos made this https://keycode.info/ for us to use as an example */

const output = document.getElementById("output")

document.addEventListener("keypress", function(e){
    console.log(e.key)
    console.log(e.keyCode)
    output.textContent = "You've pressed the \"" + e.key + "\" key. It's key code is " + e.keyCode
})