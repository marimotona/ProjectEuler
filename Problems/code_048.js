/*

The series, 11 + 22 + 33 + ... + 1010 = 10405071317.

Find the last ten digits of the series, 11 + 22 + 33 + ... + 10001000.

*/

function series(){
    const limit = 1000;
    let sum = BigInt(0);
    for(let i = 1; i <= 1000; i++){
        sum += BigInt(i) ** BigInt(i);
    }

    const strSum = sum.toString();
    const result = strSum.slice(-10);
    return result;
}
console.log(series());