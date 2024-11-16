var a=document.querySelector(".colors")
var b=document.querySelector(".popup")
var addbutton=document.querySelector(".add")
var container=document.querySelector(".container")
var bname=document.getElementById("b-name")
var aname=document.getElementById("a-name")
var summary=document.getElementById("summary")
var add=document.getElementById("add-book")

addbutton.addEventListener("click",function(){
    a.style.display="block"
    b.style.display="block"
    bname.value=""
    aname.value=""
    summary.value=""
})
var cancel=document.getElementById("cancel")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    a.style.display="none"
    b.style.display="none"
})


add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${bname.value}</h2>
            <h4>${aname.value}</h4>
            <p>${summary.value}</p>
            <button onclick="deletetab(event)">Close</button>`
            container.append(div)
             a.style.display="none"
             b.style.display="none"
})
// selecting the close button
function deletetab(event){
    event.target.parentElement.remove()
}

