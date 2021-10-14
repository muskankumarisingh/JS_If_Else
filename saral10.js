let readlineSync = require("readline-sync");
var varx = readlineSync.questionInt("enter your number :- ")
var vary = readlineSync.questionInt("enter your number :- ")
if (varx%vary==0){
    console.log("Divisible");
}
else {
    console.log("Not divisible");
}