const data = {
    0: '', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
    6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
    11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
    16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty',
    30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 
    90: 'ninety', 100: 'onehundred', 200: 'twohundred', 300: 'threehundred', 400: 'fourhundred', 
    500: 'fivehundred', 600: 'sixhundred', 700: 'sevenhundred', 800: 'eighthundred', 
    900: 'ninehundred', 1000: 'onethousand'
}

function number(num) {
    let one = num % 10;
    let ten = num % 100 - one;
    let hundred = num % 1000 - ten - one;
    let value =[];
    let length;
    let string;
    let result = 0;
    if (ten === 10) { //10~19の処理
        ten = one + ten;
        one = 0;
    }
    if (num > 100) {
        string = "and";
    } else {
        string = "";
    }

    value.push(data[hundred], string, data[ten], data[one]);
    value = value.join('');
    //const array = value.toString().split('');
    for (let j = 0; j < value.length; j++) {
        result++;
    }
    //console.log(result);
    return result;
}

//console.log(number(100));
let sum = 0;
for (let k = 1; k <= 1000; k++) {
    sum += number(k);
}
console.log(sum);
return sum;

