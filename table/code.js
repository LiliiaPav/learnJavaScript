let tbodyEl = document.getElementById('xxx');

let myData = [[90090090, 'Lucas'], [900900000, 'Linda'], [11001100, 'Elis']];
let dataHTML= ``;
function insertData(a, b){
    
    dataHTML+=`<tr><td>${a}</td><td>${b}</td></tr>`;
    console.log(dataHTML);
    tbodyEl.innerHTML += dataHTML;
}

window.onload =()  => {insertData(myData[0][0], myData[0][1]);}


console.log(tbodyEl)