//Includes, Some, and Every
const bowlingScores = [154, 204, 300, 184, 286];

//Challenge Question #1
//Does the array of bowling scores include a 300?
let result = bowlingScores.includes(300);
console.log(result);

//Challenge Question #2
//Are some of the scores under 150?
result=bowlingScores.some((i) => i<150 );
console.log(result);

//Challenge Question #3
//Is every score an even number?
result=bowlingScores.every((i) => i%2==0);
console.log(result);
