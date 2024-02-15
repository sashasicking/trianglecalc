


document.getElementById("btn").addEventListener("click", btnClicked);
function btnClicked(){
// Triangle Perimeter Assignment Start Code
//Variables

let xA = +document.getElementById("xA-in").value;
let yA = +document.getElementById("yA-in").value;
let xB = +document.getElementById("xB-in").value;
let yB = +document.getElementById("yB-in").value;
let xC = +document.getElementById("xC-in").value;
let yC = +document.getElementById("yC-in").value;

let AB = dist(xA, yA, xB, yB);

let AC = dist(xA, yA, xC, yC);

let BC = dist(xC, yC, xB, yB);

let Perimeter = AB + AC +BC;

document.getElementById("output").innerHTML = `AB: ${AB}, BC: ${BC}. AC: ${AC}, Perimeter of ABC: ${Perimeter}`;
}

function dist(x1, y1, x2, y2){
    return Math.sqrt((x1 - x2)** 2 + (y1-y2)** 2)
}