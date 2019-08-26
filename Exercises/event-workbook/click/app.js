// make the box disapear when the user clicks it

const redbox = document.getElementsByClassName("red-box")
redbox[0].addEventListener("click", function(e){
    e.target.style.visibility = "hidden"
})