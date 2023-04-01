/*

We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.


*/

function isPand(num) {
    if(num.length !== 9) return false;

    for (const digit of "123456789") {
        if(!num.includes(digit)) return false;
    }

    return true;
}

function pandigital(){
    let count = 0;
    const data = new Set();
    //1-digits * 4-digits
    
    for(let i=1; i<=9; i++) {
        for(let j=1000; j<=9999; j++) {
            let product = i * j;
            let str = i.toString() + j.toString() + product.toString();
            if(isPand(str)){
                data.add(product);
            }
        }
    }
    

    //2-digits * 3-digits
    for(let i=10; i<=99; i++) {
        for(let j=100; j<=999; j++) {
            let product = i * j;
            let str = i.toString() + j.toString() + product.toString();
            if(isPand(str)){
                data.add(product);
            }
        }
    }

    for(const ele of data) {
        count += ele;
    }

    console.log(count);
    return count;
}
pandigital();