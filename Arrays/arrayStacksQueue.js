const sports = ['baseball', 'basketball', 'soccer'];
sports.push('football');
console.log(sports);
sports.pop();
console.log(sports);

const ages = [18, 33, 71, 29, 65, 62];
ages.unshift(36);
console.log(ages);

const holidays = ['Labor Day', 'Christmas', 'Hanakkuh', 'Independence Day'];
const shiftedVal = holidays.shift();
console.log(shiftedVal);
console.log(holidays);