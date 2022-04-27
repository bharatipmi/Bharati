var colors = ["blue", "orange", "red", "yellow"];
var currentColor = 0

window.addEventListener("click", function(event) {
    let box= document.querySelectorAll('.box');
      
   box.forEach(item=> item.style.backgroundColor= colors[currentColor]);
    if(currentColor===3)
    {
    currentColor=0;
    }
    else{
    currentColor++;
    }
   
});