// function timeteller(hour, min, period) {
//
//     if (min > 30) {
//         console.log("It's almost ");
//     } else {
//         console.log("It's just after ");
//     }
//     console.log(hour);
//     if (period == "AM") {
//         console.log(" in the morning");
//     } else {
//         console.log(" in the evening");
//     }
// }

//////////////////
//REAL TIME DATE//
//////////////////

//test variables - commented out when not in use
// var hour = 0;
// var min = 0;

var d = new Date();
var hour = d.getHours(); //NOT SURE if hours with single digit are given as 1 or 01, too lazy to find out :p
var min = d.getMinutes();
// console.log(hour + ":" + min);

if (min > 30) {
    var txt = "It's almost ";
} else {
    var txt = "It's just after ";
}

if (hour < 12) {
    var period = " in the morning";
} else if (hour == 12) {
    var period = " at noon";
} else if (hour == 0) {
    var period = " at midnight";
} else {
    var period = " in the evening";
}

var hour = (hour - 12);

console.log(txt + hour + period);
