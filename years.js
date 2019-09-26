var readlinesync = require("readline-sync");
let year = readlinesync.question("\nWhat year were you born?\n","1995");
var dt = new Date();
let age = dt.getFullYear() - year;

switch(true){
    case (age<18):
        console.log("minor");
        break;
    case (age >= 18 && age <= 36):
        console.log("youths");
        break;
    default:
        console.log("elders");
        break;
}