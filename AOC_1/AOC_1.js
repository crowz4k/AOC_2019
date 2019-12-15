console.log('-----------START-----------')

const fs = require('fs');
const readline = require('readline');

let sum = 0;

async function processLineByLine() {
    const fileStream = fs.createReadStream('Input_1.txt');
    
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });

    for await (const line of rl) {
      let f = (Math.trunc(line/3)-2);
      let ff =f;
      while(f>0){
        const k = Math.trunc(f/3)-2;         
        if(k>0){
         ff+=k;   
        }
        f=k;
      }
      sum = sum+ff ;
    }
  }

  

  processLineByLine().then(()=>console.log(sum));