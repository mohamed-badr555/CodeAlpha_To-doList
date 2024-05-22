let inputbox =document.getElementById("inputbox");
let listcontainer =document.getElementById("listcontainer");
let error =document.querySelector(".box .err");
let add=document.getElementById("add");

listcontainer.innerHTML =localStorage.getItem("Data");

add.addEventListener("click",function(){
    if(inputbox.value.trim() === "")
        {
           
            error.classList.add("dblock");
        }
        else
        {
            error.classList.remove("dblock");
            let li =document.createElement("li");
            li.innerHTML=inputbox.value;
            listcontainer.appendChild(li);
            let span =document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
        }
    inputbox.value="";
    localStorage.setItem("Data",listcontainer.innerHTML);
})

listcontainer.addEventListener("click",function(e){
if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        localStorage.setItem("Data",listcontainer.innerHTML);
    }else if(e.target.tagName==="SPAN")
        {
            e.target.parentElement.remove();
            localStorage.setItem("Data",listcontainer.innerHTML);
        }

 
},false);