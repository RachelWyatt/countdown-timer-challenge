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

  document.getElementById("days-top").attributes[2].nodeValue = days;
  document.getElementById("days-bottom").attributes[2].nodeValue = days;
  document.getElementById("hours-top").attributes[2].nodeValue = hours;
  document.getElementById("hours-bottom").attributes[2].nodeValue = hours;
  document.getElementById("minutes-top").attributes[2].nodeValue = minutes;
  document.getElementById("minutes-bottom").attributes[2].nodeValue = minutes;
  document.getElementById("seconds-top").attributes[2].nodeValue = seconds;
  document.getElementById("seconds-bottom").attributes[2].nodeValue = seconds;
}
