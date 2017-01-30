var d = new Date();
var hour = d.getHours();
var min = d.getMinutes();
console.log(hour + ":" + min);

//If You Don't Mind Assignment.
//Assuming input is in military time format.

var hour = 20;
var min = 30;

///////////////////////////////////////////////////////////
//DEFINING Description Whether it's quarter or half past //
///////////////////////////////////////////////////////////

while(min <= 30){
if( min === 0){
  var txt = "It's ";
}
  else if(min == 5) {
    var txt = "It's 5 after ";
}
else if (min == 15) {
    var txt = "It's quarter after ";
}
else if (min == 30) {
    var txt = "It's half past ";
}
else{
    var txt = "It's just after ";
}
  break;
}

while (min > 30) {
    var txt = "It's almost ";
    break;
}

/////////////////////////////////////////////////////////////
//DEFINING PERIOD. Whether it's noon, afternoon, or evening//
/////////////////////////////////////////////////////////////

while(hour < 17){ //if hour is between 0 AM and 4 PM
    if (hour == 12) {
        var period = " at noon";
    }
    else if (hour > 12 && hour < 17) {
        var period = " in the afternoon";
    }
    else if (hour === 0) {
        var period = " at midnight";
    }
    else{
        var period = " in the morning";
    }
    break;
}

while(hour >= 17){ //hour is between 4 PM and 11:59 PM
    if (hour >= 17 && hour <=19){
        var period = " in the evening";
    }
    else{
        var period = " at night";
    }
    break;
}


if (hour > 12) {
    hour = (hour - 12);
}

console.log(txt + hour + period);
