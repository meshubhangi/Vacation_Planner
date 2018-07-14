enterDays.onclick = calculateDays;
var daysInput = document.getElementById("days");
    var days = daysInput.value;
function calculateDays(){
    var daysMessage = document.getElementById("daysMessage");
     if(days < 4){
         daysMessage.innerHTML = "Short trips are always worth it!";
     }
     else if(days < 7){
         daysMessage.innerHTML = "Cool, you'll be there for almost a week!";
     }
     else{
         daysMessage.innerHTML = "You'll have plenty of time to relax and have fun!";
     }
}