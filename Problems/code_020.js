function factorial(num){
    if(num < 2) return 1n;
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

console.log(sum(factorial(100)));