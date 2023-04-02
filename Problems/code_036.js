/*

The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)

*/

function palid(num){
    let strN = String(num);
    let left = 0;
    let right = strN.length - 1;

    while(left<right){
        if(strN[left] !== strN[right]){
            return false;
        } else {
            left++;
            right--;
        }
    }
    return true;
}
//palid(585);

function parseTwo(num){
    let Answer = "";
    while(num >= 1){
        if (num % 2 === 0) {
            Answer = "0" + Answer;
        } else {
            Answer = "1" + Answer;
        }
        num = Math.floor(num / 2);
    }
    return Answer;
}
//console.log(parseTwo(5));

let sum = 0;
for(let i=1; i<= 1000000; i++){
    if(palid(i)){
        const remin = parseTwo(i)
        if(palid(remin)){
            sum += i;
        }
    }
}
console.log(sum);