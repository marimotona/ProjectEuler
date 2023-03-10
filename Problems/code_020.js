function factorial(num){
    if(num < 2) return 1n;
    // let sum = 1;
    // sum = num * factorial(num - 1);
    // return sum;
    return BigInt(num) * factorial(num - 1);
}

function sum(ele) {
    let result = 0;
    while (ele > 0n){
        result += Number(ele % 10n);
        ele = ele / 10n;
    }
    return result;
}
//console.log(factorial(100));

console.log(sum(factorial(100)));