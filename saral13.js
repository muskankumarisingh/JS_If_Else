let readlineSync = require("readline-sync");
var age = readlineSync.questionInt("enter your age :- ")
if (age>=5){
    console.log("You can go to school");
}
if (age>=18){
    console.log("You can vote in selection");
}
if (age>=21){
    console.log("you can drive a car");
}
if (age>=24){
    console.log("you can marry");
}
if (age>=25){
    console.log("you can legally drink");
}
else {
    console.log("nothing")
}