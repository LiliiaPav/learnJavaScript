//let hello='Hello world from Node.js';
//let justNode=hello.slice(17);
//console.log(`Who let the ${justNode} out?`);

//const path=require('path');

//console.log(__dirname);
//console.log(`The file name is ${path.basename(__filename)}`);
/*
for (let key in global){
    console.log(key);
}*/


//console.log(process.argv);
/*
function grab(flag){
    let indexAfterFlag = process.argv.indexOf(flag)+1;
    return process.argv[indexAfterFlag];
}

let user = grab('--user');

console.log(user);

//run: node global --user lili --greeting "hello from node"
*/

//standard input/output


const questions =[
    "What is your name?",
    "What would you rather be doing?",
    "What is your preffered programming language?"
];

const answers =[];

function ask(i=0){
    process.stdout.write(`\n ${questions[i]} \n`);
    process.stdout.write(` > `);
}

ask();

process.stdin.on("data", function(data){
    answers.push(data.toString().trim());
    if(answers.length<questions.length){
        ask(answers.length);
    }
    else {
        process.exit();
    }
});


process.on("exit", function() {
    process.stdout.write('\n\n\n');
    process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`);
})
