let btn = document.getElementById("menu-barBtn")
let menu = document.getElementById("mobile-menu")

btn.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
    console.log("Hi");
    
})