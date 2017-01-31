var money = 0.01;

// //How much reward after 30 days?
// for (var d = 2; d <= 30; d++) {
//     money = money * 2;
// }
// console.log("He was rewarded $" + money);

//How many days to earn $10,000?
for (var d = 2; d <= 30; d++) {
    if (money >= 10000) {
        console.log("It took " + d + " days");
        break;
    } else {
        money *=2;
    }
}
