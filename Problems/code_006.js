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
//minus(sumSquare(100), square(100));
//minus();

function program(ele1, ele2) {
    let multiSum = 0;
    let sum = 0;
    let result = 0;
    multiSum = (ele1*(ele1 + 1)*(2*ele1+1)/6);
    sum = (ele2*(ele2+1)/2)*(ele2*(ele2+1)/2);
    result = sum-multiSum;
    console.log(result);
}
program(100,100);