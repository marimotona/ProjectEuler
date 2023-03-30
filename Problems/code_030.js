/*

Surprisingly there are only three numbers that can be written as the sum of fourth 5s of their digits:

1634 = 14 + 64 + 34 + 44
8208 = 84 + 24 + 04 + 84
9474 = 94 + 44 + 74 + 44
As 1 = 14 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of fifth 5s of their digits.

*/


function fifPow() {
    let result = 0;

    //上限の設定
    //5乗の場合、各桁の最大値は9
    const limit = (5 + 1) * Math.pow(9, 5);

    for(let i=100; i<limit; i++) {
        let sum = 0;
        const str = i.toString();
        for(let j=0; j<str.length; j++) {
            sum += str[j] ** 5;
        }
        if(sum === i) {
            result += sum;
        }
    }
    console.log(result);
    return result;
}
fifPow();