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

var search = document.getElementById("search");
var container = document.getElementById("container");
var card = container.querySelectorAll("div");
// console.log(card);

search.addEventListener("keyup",function(){
    var enter = event.target.value.toUpperCase();
    // console.log(card[0].querySelector("h1").textContent);
    for(count=0;count<card.length;count=count+1){
        var productname = card[count].querySelector("h1").textContent;
        // console.log(productname);
        if(productname.toUpperCase().indexOf(enter)<0){
            card[count].style.display="none";
        }
        else{
            card[count].style.display="block";
        }
    }

})