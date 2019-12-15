'use-strict'

//19690720 -250715

const fs = require('fs');

let data = fs.readFileSync('Input_2.txt');
let input = JSON.parse(data);
let input2 = [...input];

function calculate() {
    for (let i = 0; i < input.length; i=i+4) {
        const element = input[i];
        switch (element) {
            case 99:
                continue;
            case 1:
                input[input[i+3]]=input[input[i+2]]+input[input[i+1]];
                break;
            case 2:
                input[input[i+3]]=input[input[i+2]]*input[input[i+1]];
                break;
            default:
                break;
        }
    }
}

let found = false;
for (let i= 0; i <= 99; i++) {
    
    if(found){
        break;  
    }

    for (let j = 0; j <=99; j++) {
        input[1]=i;
        input[2]=j;

        calculate();

        if(input[0]===19690720){
            console.log(input);
            console.log('-----------------------------------');
            found = true;
            break;
        }
        input = [...input2];
    }
}