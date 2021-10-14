let readlineSync = require("readline-sync");
var varx = readlineSync.questionInt("enter your number :- ")
var vary = readlineSync.questionInt("enter your number :- ")
if (varx>vary){
    console.log("varx is greater");
}
else{
    console.log("vary is greater")
}