const grades = [88, 75, 92, 95, 85];
let bonusGrades = grades.map((grade) => {
    return grade + .5
})

//let bonusGr = grades.map(grade => grade+5);
console.log(bonusGrades);


const friends = [
    { firstname: 'Jane', lastname: 'Doe' },
    { firstname: 'John', lastname: 'Smith' },
    { firstname: 'Alex', lastname: 'Trebek' },
  ];
  


  const grades2 = [88, 75, 92, 95, 85];
  grades2[2]=17;
  console.log(grades2);

  grades2.push(99);
  console.log(grades2);

  grades2.unshift(77);
  console.log(grades2);

  delete grades2[2];
  console.log(grades2);

  grades2.pop();
  console.log(grades2);

  grades2.shift();
  console.log(grades2);


  let myArr = ['Otto', 'Sonya'];
  let newArr = myArr.map((elem) => {
      return elem + ' happy'
  })

  console.log(newArr);