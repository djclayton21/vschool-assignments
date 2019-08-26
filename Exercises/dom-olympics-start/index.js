// add header

header = document.getElementById("header")

const header1 = document.createElement("h1")
const header1Text = document.createTextNode("JavaScript Made This!!")
header1.appendChild(header1Text)
header.appendChild(header1)

const header2 = document.createElement("h3")
header.appendChild(header2)

const name = document.createElement("span")
name.textContent = "Dan";
name.classList.add("name");
header2.appendChild(name);

const header2Text = document.createElement("span")
header2Text.textContent = " wrote the JavaScript"
header2.appendChild(header2Text);

//bronze

const messages = document.getElementsByClassName("messages")[0]


for (let i = 0; i < messages.children.length; i++){
    let messageContent = messages.children[i].textContent
    
    messageContent = messageContent.replace(/serious/gi, "happy")
    messageContent = messageContent.replace(/don't want/gi, "would love")
    messageContent = messageContent.replace(/police/gi, "hug police")
    messageContent = messageContent.replace(/farmer/gi, "hapiness grower")

    messages.children[i].textContent = messageContent
    console.log(messageContent);
}

const clear = document.getElementById("clear-button");

clear.addEventListener("click", function(){
    while(messages.firstChild){
        messages.removeChild(messages.firstChild);
    }
})

//silver

const dropdown = document.getElementById("theme-drop-down")

dropdown.addEventListener("change", function(){
    let theme = dropdown.value;
    if(theme === "theme-one"){
        let leftMessages = document.getElementsByClassName("left")
        for (let i = 0; i < leftMessages.length; i++){
            leftMessages[i].style.backgroundColor = "burlywood";
        }
        let rightMessages = document.getElementsByClassName("right")
        for (let i = 0; i < rightMessages.length; i++){
            rightMessages[i].style.backgroundColor = "lightblue"
        }
 
    } else if (theme === "theme-two"){
        let leftMessages = document.getElementsByClassName("left")
        for (let i = 0; i < leftMessages.length; i++){
            leftMessages[i].style.backgroundColor = "indianred";
        }
        let rightMessages = document.getElementsByClassName("right")
        for (let i = 0; i < rightMessages.length; i++){
            rightMessages[i].style.backgroundColor = "lightgrey"
        }

    } else if (theme === "theme-three"){
        let leftMessages = document.getElementsByClassName("left")
        for (let i = 0; i < leftMessages.length; i++){
            leftMessages[i].style.backgroundColor = "hotpink";
        }
        let rightMessages = document.getElementsByClassName("right")
        for (let i = 0; i < rightMessages.length; i++){
            rightMessages[i].style.backgroundColor = "lime"
        }
    }
})