/*

The first two consecutive numbers to have two distinct prime factors are:

    14 = 2 × 7
    15 = 3 × 5

The first three consecutive numbers to have three distinct prime factors are:

    644 = 2² × 7 × 23
    645 = 3 × 5 × 43
    646 = 2 × 17 × 19.

Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?

*/

function diviPrime(num){
    const factor = new Set();
    let divi = 2;

    while(num > 1){
        while(num % divi === 0){
            factor.add(divi);
            num /= divi;
        }
        divi++;
    }

    return factor.size;
}

function consective(){
    let count = 0;
    let n = 2 * 3 * 5 * 7;

    while(count < 4){
        n++;
        diviPrime(n) === 4 ? count++ : (count = 0);
        //diviprimeの大きさが4だったら、countをインクリメント、もし4出なかったら、count = 0
    }

    return n - 3;
}

console.log(consective());