
//select popupbox  popup-overlay   addpopup

var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popupbox")
var addpopup=document.getElementById("addpopup")

addpopup.addEventListener("click" ,function(){

   
    popupoverlay.style.display="block"
     popupbox.style.display="block"

})


//select cancel button

var cancelpopup=document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){

    event.preventDefault()

     popupoverlay.style.display="none"
     popupbox.style.display="none"

})

//select container ,addbook ,book-title-input,book-author-input,book-description-input

var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput =document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){

    event.preventDefault()

    var div=document.createElement("div")

    div.setAttribute("class","bookcontainer")

    div.innerHTML=`<h2>${booktitleinput.value}</h2>
                <h4>${bookauthorinput.value}</h4>
                <p>${bookdescriptioninput.value}</p>
                <button onclick="deletebook(event)">Delete</button>`

    container.append(div)
    popupoverlay.style.display="none"
     popupbox.style.display="none"
                    
})      

function deletebook(event)
{
    event.target.parentElement.remove()
}