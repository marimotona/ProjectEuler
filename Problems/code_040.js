/*

An irrational decimal fraction is created by concatenating the positive integers:

0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If dn represents the nth digit of the fractional part, find the value of the following expression.

d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000

*/


//メモリを多く消費するコード

function decimal(){
    let strN = "";
    let result = 1;
    for(let i=0; i<=500000; i++){
        strN += i.toString();

    }
    result = strN[1] * strN[10] * strN[100] * strN[1000] * strN[10000] * strN[100000] * strN[1000000];
    console.log(result);
}
decimal();


//別解

function decimalNeo(){
    let result = 1;
    let currentPos = 0;
    let targetPositions = [1, 10, 100, 1000, 10000, 100000, 1000000];
    let targetIndex = 0;

    for (let i = 1; targetIndex < targetPositions.length; i++) {
        let numberStr = i.toString();

        for (let j = 0; j < numberStr.length; j++) {
            currentPos++;

            if(currentPos === targetPositions[targetIndex]){
                result *= parseInt(numberStr[j])
                targetIndex++;
            }
        }
    }

    console.log(result);
    return result;
}
decimalNeo();