var btn = document.getElementById("btn");
var close = document.getElementById("close");
var sidenav = document.getElementById("sidenav");
btn.addEventListener("click",function(event){
    console.log(event);
    sidenav.style.right=0;
})

close.addEventListener("click",function(event){
    console.log(event);
    sidenav.style.right= "-75%" ;
})