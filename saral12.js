let readlineSync = require("readline-sync");
var number = readlineSync.questionInt("enter your number :- ")
if (number%5==0 && number%15==0){
    console.log("Divisible by both");
}
else{
    console.log("Not divisible by both")
}