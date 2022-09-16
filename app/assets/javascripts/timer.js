window.onload = console.log("I'm here")
window.onload = setDeadline()
window.onload = setInterval(countdown, 1000)

function setDeadline () {
  var currentTime = new Date();
   deadline = currentTime.setDate(currentTime.getDate() + 14);
}

function countdown () {
  var now = new Date()
  var remaining_time = deadline - now;

  if (remaining_time > 0) {
    var days = Math.floor((remaining_time / (1000 * 60 * 60 * 24)));
    var hours = Math.floor((remaining_time / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((remaining_time / 1000 / 60) % 60);
    var seconds = Math.floor((remaining_time / 1000) % 60);
  }

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}
 
