const pets=['dog', 'cat', 'rabbit', 'humster'];
const petsLenght = pets.length;

pets[petsLenght]='snake';

//pets.forEach((element) => {console.log(element)})

const scores = [50, 60, 88, 94, 72, 53, 77];
const logScore = (score) => console.log('Score over 65', score);
/*
scores.forEach((i)=>{
    if (i>65){logScore(i)}
})
*/
//console.log(scores.sort());
//console.log(scores.sort((a,b) => a-b));
//console.log(scores.sort((a,b) => b - a));

//we make a copy of pets array. We can't use = because the original array will be changed

const reversed = [...pets];
//console.log('reversed', reversed.reverse());
//console.log(pets);

const grades= [99, 83, 87, 91, 77, 79];
//find a grade less than 80

const underEighty = grades.find((i) => i< 80);
//console.log(underEighty);

//find index of a grade over 80
const overEighty = grades.findIndex((i) => i > 80);
//console.log(overEighty);


//CHALLENGE

const students = [
    {name: 'John', grade: 75},
    {name: 'Jane', grade: 93},
    {name: 'Samantha', grade: 90},
    {name: 'Michael', grade: 94}
];

// Sort by grades descending

console.log(students.sort((a,b) => b.grade-a.grade));

//reverse the order

console.log(students.reverse());

//grade over 80

const overNinety = students.find((i) => i.grade> 90);
console.log(overNinety);


const grades2 = [88, 75, 92, 95, 85];



grades2.forEach((i)=>{
    if (i>90){console.log('High: ', i)}
})

console.log(grades2.find((i) => i< 80));
console.log(grades2.findIndex((i) => i> 90));








