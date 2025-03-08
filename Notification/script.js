function Create_Element(){
    var container = document.getElementById("container")
    var div = document.createElement("div")
    var close_button = document.createElement("button")
    div.innerText = "You Have a New Message!"
    close_button.innerText = "X"
    div.appendChild(close_button)
    if(container.hasChildNodes()){
        container.insertBefore(div, container.firstChild)
    }
    else{
        container.appendChild(div)
    }

    close_button.onclick = function(){
        container.removeChild(div)
    }
    close_button.innerText = "X"
    close_button.style.border = "none"
    div.style.display = "flex"
    div.style.justifyContent = "space-between"
    div.style.backgroundColor = "#e0f7fb"
    div.style.border = "1px solid #07dbfc"
    div.style.padding = "10px 10px 7px 10px"
    

    setTimeout(() => {container.removeChild(div)},
    5000)


    close_button.addEventListener ("mouseenter", function()
    {
        close_button.style.color = "red"
    })
    
    close_button.addEventListener ("mouseleave", function(){
        close_button.style.color = "black"
    })

}

