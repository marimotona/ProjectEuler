/*

The nth term of the sequence of triangle numbers is given by, tn = ½n(num+1); so the first ten triangle numbers are:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value. For example, the word value for SKY is 19 + 11 + 25 = 55 = t10. If the word value is a triangle number then we shall call the word a triangle word.

Using words.txt (right click and 'Save Link/Target As...'), a 16K text file containing nearly two-thousand common English words, how many are triangle words?

*/

const fs = require('fs').promises;

//alphabet

function countAlphabet(name) {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
      sum += name.charCodeAt(i) - 64;
    }
    return sum;
}

function triangle(num){
    const triangleData = [];
    let n = 1;
    while (n * (n + 1) / 2 <= num) {
        triangleData.push((n * (n + 1)) / 2);
        n++;
    }
    //console.log(triangleData);
    return triangleData;
}
//triangle(20);

async function findNames() {
  try {
    const data = await fs.readFile('../Data/code_042_words.txt', 'utf-8');
    let letter = data.replace(/"/g, '').split(',').sort();

    let resultSum = 0;

    const maxTriangleValue = 26 * 20;
    const comparisonData = triangle(maxTriangleValue);

    for(let i = 0; i < letter.length; i++){
        const alphabetSum = countAlphabet(letter[i]);

        if(comparisonData.includes(alphabetSum)){
            resultSum++;
        }
    }


    console.log(resultSum);
    return resultSum;
  }catch (err) {
    console.log(err);
  }
  
}

findNames();