var minuteInput = document.getElementById("a");
var secondsInput = document.getElementById("b");
var editBox = document.querySelector('.editable-in-place');
var clock = document.getElementById("clock");
var input = document.getElementById("inputBox");
var min;
var sec;

window.addEventListener('DOMContentLoaded', documentLoaded);


function documentLoaded() {
  document.getElementsByClassName("editable-in-place")[0].addEventListener("click", clicked);;
}


function clicked() {

  clock.classList.add("hide");
  input.classList.remove("hide");
  minuteInput.focus();
  minuteInput.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      secondsInput.focus();
    }
  });

  secondsInput.addEventListener("keydown", function (e) {
    let min = 0;
    let sec = 0;

    if (e.keyCode === 13) {
      let minuteValue = minuteInput.value;
      let secondValue = secondsInput.value;

      // minuteInput.value=String(min).padStart(2,"0");
      //secondsInput.value=String(sec).padStart(2,"0");

      const secondId = setInterval(() => {
        input.classList.add("hide");
        clock.classList.remove("hide");
       
        sec++;
        clock.innerHTML = String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0");

        if (Number(sec) === 60) {
          ++min;
          minuteInput.value = String(min).padStart(2, "0");
          sec = 0;
        }

        if (min === Number(minuteValue) && sec === Number(secondValue))
         {
           console.log("end");
          editBox.classList.add("red");
          clearInterval(secondId);

        }

        secondsInput.value = String(sec).padStart(2, "0");


      }, 1000);


    }

  });





}

