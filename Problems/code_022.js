//alphabetのデータを作る
//let alphabet = [];
let alphabet = {};
for (let j = 'A'.charCodeAt(0); j <= 'Z'.charCodeAt(0); j++) {
  //alphabet.push(String.fromCharCode([j]));
  alphabet[String.fromCharCode(j)] = j - 'A'.charCodeAt(0) + 1;
}

//console.log(alphabet);

const fs = require('fs');
let letter = [];
let sum = 0;
fs.readFile('../Data/code_022_names.txt', 'utf-8', (err, data) => {
  if (err) throw err;
//   letter.push(data);
//   letter.sort();
  letter = data.replace(/"/g, '').split(',').sort();
  const letterNum = letter;
  console.log(letter.length);
  for (let i = 0; i < letter.length; i ++) {
    for (let k = i; k < letter[i].length; k ++) {
      if(alphabet[letter[i][k]]) { //alphabetオブジェクトの中に、letter[i][k]の要素があっあたら
        sum += alphabet[letter[i][k]];
      }
    }
  }

  console.log(sum);
});


//letter.sort();
// let alphabet = letter.sort();
//console.log(letter);