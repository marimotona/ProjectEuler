function corner(left, right) {
    let sum = left + right;
    let result = 0;
    result = factorial(sum) / (factorial(left)*factorial(right));
    console.log(result);
    return result;
}

function factorial(num) {
    if(num < 2) return 1;
    return num * factorial(num - 1);
}

corner(20, 20);