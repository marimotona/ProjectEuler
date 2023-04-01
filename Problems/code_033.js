/*

The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

*/

function GCD(A, B) {
    while(A >= 1 && B >= 1) {
        if(A < B)B = B % A;
        else A = A % B;
    }

    if(A >= 1) return A;
    return B;
}

function same(num1, num2){
    const newNum1 = num1.toString();
    const newNum2 = num2.toString();

    for(const ele of newNum1) {
        if(newNum2.includes(ele)){
            const numerator = parseInt(newNum1.replace(ele, ''), 10);
            const denominator = parseInt(newNum2.replace(ele, ''), 10);

            if(denominator !== 0 && (num1 / num2) === (numerator / denominator)){
                return { numerator, denominator };
            }
        }
    }

    // console.log(result);
    return null;
}

function curious(){
    let numeratorProduct = 1;
    let denominatorProduct = 1;

    for(let i=10; i<= 99; i++) {
        for(let j=i+1; j<= 99; j++) {
            //10の倍数のものは,trivialだから条件から外す
            if (i % 10 === 0 && j % 10 === 0) continue; 
            const fraction = same(i, j);

            if (fraction) {
                numeratorProduct *= fraction.numerator;
                denominatorProduct *= fraction.denominator;
            }
        }
    }

    const divi = GCD(numeratorProduct, denominatorProduct);
    const result = denominatorProduct / divi;

    console.log(result);
    return result;
}

curious();