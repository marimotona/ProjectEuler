function divisor(num) {
    let end = Math.floor(num / 2);
    let sum = 0;
    for (let i = 1; i <= end; i++) {
        if(num % i === 0) {
            sum += i;
        }
    }
    return sum;
}

let count = 0;
const abundant = [];
for (let i = 1; i < 28123; i++) {
    if(i < divisor(i)) {
        abundant.push(i);
        count++;
    }
}
//const abundantSum = [];
const uniabundantSum = new Set();
for(let j = 0; j < abundant.length; j++) {
    for(let k = 0; k < abundant.length; k++) {
        if(abundant[j] + abundant[k] <= 28123) {
            //const abundantSum = new Set([abundant[j] + abundant[k]]);
            uniabundantSum.add(abundant[j] + abundant[k]);
        }
    }
}

let result = 0;
for (let i = 1; i <= 28123; i++) {
    if(!uniabundantSum.has(i)) {
        result += i;
    }
}

console.log(result);

//console.log(uniabundantSum);
//console.log(count);
//console.log(abundant);