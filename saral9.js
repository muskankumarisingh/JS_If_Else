let readlineSync = require("readline-sync");
var varx = readlineSync.questionInt("enter your number :- ")
if (varx%2==0){
    console.log("divisible hai");
}
else {
    console.log("divisible nai hai");
}
