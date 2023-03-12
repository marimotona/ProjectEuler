//alphabetのデータを作る
//let alphabet = [];
const alphabet = {};
for (let j = 'A'.charCodeAt(0); j <= 'Z'.charCodeAt(0); j++) {
  //alphabet.push(String.fromCharCode([j]));
  alphabet[String.fromCharCode(j)] = j - 'A'.charCodeAt(0) + 1;
}

//console.log(alphabet);

// const fs = require('fs');
// let letter = [];
// let sum = 0;
// fs.readFile('../Data/code_022_names.txt', 'utf-8', (err, data) => {
//   if (err) throw err;
//   letter = data.replace(/"/g, '').split(',').sort();
//   for (let i = 0; i < letter.length; i ++) {
//     for (let k = i; k < letter[i].length; k ++) {
//       if(alphabet[letter[i][k]]) { //alphabetオブジェクトの中に、letter[i][k]の要素があっあたら
//         sum += alphabet[letter[i][k]];
//       }
//     }
//   }

//   console.log(sum);
// });

const fs = require('fs').promises;

async function findNames() {
  try {
    const data = await fs.readFile('../Data/code_022_names.txt', 'utf-8');
    let letter = data.replace(/"/g, '').split(',').sort();
    let sum = 0;
    // for (let i = 0; i < letter.length; i ++) {
    //       for (let k = 0; k < letter[i].length; k ++) {
    //         if(alphabet[letter[i][k]]) { //alphabetオブジェクトの中に、letter[i][k]の要素があっあたら
    //           sum += alphabet[letter[i][k]];
    //         }
    //       }
    
    // }
    function countName(name) {
      let sum = 0;
      for (let i = 0; i < name.length; i++) {
        sum += name.charCodeAt(i) - 64;
      }
      return sum;
    }

    let result = 0;
    for (let j = 0; j < letter.length; j++) {
      result += countName(letter[j]) * (j + 1);
    }
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

findNames();
