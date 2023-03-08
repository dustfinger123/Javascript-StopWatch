var interval;

function buttonStart() {
  clearInterval(interval);
  interval = setInterval(startTimer, 100);
}

function buttonStop() {
  clearInterval(interval);
}
function buttonReset() {
  clearInterval(interval);
  miliseconds = "00";
  seconds = "00";
  minutes = "00";
  document.getElementById("miliSeconds").innerHTML = miliseconds;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("minutes").innerHTML = minutes;
}

var miliseconds = 00;
var seconds = 00;
var minutes = 00;
function startTimer() {
  document.getElementById("miliSeconds").innerHTML = miliseconds += 10;

  if (miliseconds > 99) {
    miliseconds = 0;
    document.getElementById("miliSeconds").innerHTML = "0" + 0;
    document.getElementById("seconds").innerHTML = seconds += 1;
  }
  if (seconds <= 09) {
    document.getElementById("seconds").innerHTML = "0" + seconds;
  }
  if (seconds > 59) {
    seconds = 0;
    document.getElementById("seconds").innerHTML = "0" + 0;
    document.getElementById("minutes").innerHTML = minutes += 1;
    document.getElementById("minutes").innerHTML = "0" + minutes;
  }
  if (minutes >= 10) {
    document.getElementById("minutes").innerHTML = minutes;
  }
}
