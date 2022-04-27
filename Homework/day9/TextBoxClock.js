var a = document.getElementById("a");
var    b = document.getElementById("b");
var min;
var sec;
var limitTime;
window.addEventListener('DOMContentLoaded', documentLoaded);


function documentLoaded() {
  document.getElementsByClassName("editable-in-place")[0].addEventListener("click", clicked);;
}


    

a.onkeyup = function() {
    if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
        
        b.focus();
    }
}

b.onkeyup = function() {
    if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
       console.log(b.value);
       sec=Number(b.value);
     limitTime= min+(sec/60) ; 
       display(limitTime);
    }
}

function display(m) {
  console.log(m);  
}
function display(valueT)
{
console.log("stat" +  valueT);
startTime = new Date();

 // limite = parseInt(document.getElementById("txtTempo").value);
 limite= valueT;

  clearInterval(temporizador);
  temporizador = setInterval(updateTime, 1000);
}


function updateTime() {
  "use strict";

  // read the current time
  var currentTime = new Date();

  // calculate how many seconds passed since the start of the timer
  var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;

  // convert seconds to minutes and seconds (below 60)
  var minutos = Math.floor(elapsed / 60);
  var segundos = Math.floor(elapsed % 60);

  // pad with zeroes on the left to look better
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }
  //console.log( typeof minutos);
  //console.log(typeof limite);
  // show the elapsed time
  document.getElementById("clock").innerHTML = minutos + ":" + segundos;

  // check if we are above the time limit and set the color of the timer accordingly
  if (+minutos >= +limite) {
    console.log("here");
    document.getElementById("clock").style.backgroundColor= "red";
  } else {
    document.getElementById("clock").style.backgroundColor ="#0781D4";
  }

}

function clicked(evt) {
    // get the <input> and check if it is hidden
    var input = this.querySelector("#inputBox");
    var label = this.querySelector("#clock");
    console.log(input);
    console.log(label);
  
    if (evt.target === input) {
      // if user clicked on <input> do nothing, he is editing
  
    } else if (evt.target === label) {
      // <input> was hidden, make it visible
      input.classList.remove("hide");
  
      // and hide the label
      label.classList.add("hide");
      a.addEventListener('onfocus',function grabMin()
      {
        console.log(a.value);
        min=Number(a.value);

      })
      b.addEventListener('onfocus',function grabSec()
      {
        console.log(b.value);
        min=Number(b.value);

      })
      
    } 
      
    }
  
  
  
     

 