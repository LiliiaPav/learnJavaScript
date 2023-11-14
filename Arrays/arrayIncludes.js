const careers= ['teacher', 'doctor', 'engineer', 'nurse', 'scientist'];

const nurseIncl = careers.includes('nurse');
//console.log(nurseIncl);

const temps = [90, 88, 85, 92, 84, 99];

//console.log(temps.some(i => i<90));
//console.log(temps.every(i => i>80));

const states=['California', 'New York', 'New Jersey', 'Alaska', 'New Mexico', 'Montana'];

//startsWith('New')
console.log(states.some((st) => st.startsWith('New')));
console.log(states.every((st) => st.startsWith('New')));