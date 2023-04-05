const fs = require('fs').promises;

async function tenSum() {
  try {
    const data = await fs.readFile('../Data/code_013.txt', 'utf-8');
    let number = data.split("\n").map(ele => BigInt(ele));

    let sum = number.reduce((a, b) => a + b);

    console.log(sum.toString().slice(0, 10));

    } catch (err) {
        console.log(err);
    }
}

tenSum();