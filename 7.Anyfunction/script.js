var isstatus=document.querySelector("h3")
var btn=document.querySelector("#add")
var check = 0
btn.addEventListener("click",function()
{
    if(check==0)
    {
    isstatus.innerHTML="Friends"
    isstatus.style.color="green"
    btn.innerHTML="Un-Friends"
    btn.style.color="red"
    check=1;
    } 
    else{
    isstatus.innerHTML="stanger"
    isstatus.style.color="black"
    btn.innerHTML="Add-Friend"
    btn.style.color="black"
    check = 0
    }
})