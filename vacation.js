var name = window.prompt("Hello! Please enter your name");
var greeting = document.getElementById("greeting");
greeting.innerHTML += ", " + name;
var enterDays = document.getElementById("enterDays");
enterDays.onclick = calculateDays;
