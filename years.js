let year = prompt("What year were you born","1995");
var dt = new Date();
let age = dt.getFullYear() - year;

switch(true){
    case (age<18):
        alert("minor");
        break;
    case (age >= 18 && age <= 36):
        alert("youths");
        break;
    default:
        alert("elders");
        break;
}