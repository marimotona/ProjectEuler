function sumSquare(num) {
    let result =0;
    for (let i = 1; i <= num; i++) {
        result += i*i;
    }
    console.log(result);
    return result;
}

function square(num) {
    let result2 = 0;
    for (let j = 1; j <= num; j++) {
        result2 += j;
    }
    const result3 = result2*result2;
    console.log(result3);
    return result3;
}

function minus(num1, num2) {
    let data = 0;
    if(num1 > num2) {
        data = num1 - num2;
    } else {
        data = num2 - num1;
    }
    console.log(data);
}

// sumSquare(10);
// square(10);
minus(sumSquare(100), square(100));
//minus();