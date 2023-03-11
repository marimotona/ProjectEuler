// fetch('./code_022_names.txt')
//     .then(res => res.text())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// import {letter} from './code_022_names.text';
// console.log(letter);

const fs = require('fs');
let letter = [];
fs.readFile('../Data/code_022_names.txt', 'utf-8', (err, data) => {
  if (err) throw err;
//   letter.push(data);
//   letter.sort();
  letter = data.replace(/"/g, '').split(',').sort();
  console.log(letter);
});

//letter.sort();
// let alphabet = letter.sort();
//console.log(letter);