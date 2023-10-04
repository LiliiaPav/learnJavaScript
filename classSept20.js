/*
let milesDriven=prompt("How many miles did you drive?");
let galons=prompt("How many galons your fuel tank hold?");
let mpg = milesDriven / galons;
document.write(`Your car gets ${mpg.toFixed(2)} miles per galon`);

let score1
let score2
let score3
let total=0
let average

//get 3 scores from the user and add them to total

score1=prompt("Enter the score1")
total+=parseFloat(score1)

score2=prompt("Enter the score2")
total+=parseFloat(score2)

score3=prompt("Enter the score3")
total+=parseFloat(score3)

average=total/3

//display the result
document.write(`<h1>The test scores app</h1>`);
document.write(`<p>The first score is ${score1}</p>`);
document.write(`<p>The second score is ${score2}</p>`);
document.write(`<p>The third score is ${score3}</p>`);
document.write(`<p>The average is ${average}</p>`);
*/

var x = 86

tempC()

document.write(`<h1>number is ${x}</h1>`);

function tempC(){
    document.write(`<h3>Inside of function begining with ${x}</h3>`)
    var x=50;
    x=(x-32)
    document.write(`<h3>Inside of function end with ${x}</h3>`)
}
