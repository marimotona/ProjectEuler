/*Quadratic primes
    
    Euler discovered the remarkable quadratic formula:
        n**2 + n + 41
    
    It turns out that the formula will produce 40 primes for the consecutive values n = 0 to 39.
    However, when n = 40, 402 + 40 + 41 = 40(40 + 1) + 41 is divisible by 41, and certainly when

        n = 41, 41n**2 + 41 + 41 is clearly divisible by 41.

    The incredible formula  n**2 - 79n + 1601 was discovered, which produces 80 primes for the
    consecutive values n = 0 to 79. The product of the coefficients, -79 and 1601, is -126479.

    Considering quadratics of the form:

        n**2 + an + b, where |a| < 1000 and |b| < 1000

    where |n| is the modulus/absolute value of n

        e.g. |11| = 11 and |-4| = 4


    Find the product of the coefficients, a and b, for the quadratic expression that produces
    the maximum number of primes for consecutive values of n, starting with n = 0.
*/



function prime(num) {
    if (num < 2) return false;
    for(let i = 2; i * i <= num; i++) {
        if(num % i === 0) return false;
    }
    return true;
}

function findPrime(){
    maxLen = 0;
    maxPro = 0;

    for(let a = -999; a<= 1000; a++) {
        for(let b = -1000; b<= 1000; b++) {
            let n = 0;
            while(prime(n*n + a*n + b)) {
                n++;
            }

            if(n > maxLen) {
                maxLen = n;
                maxPro = a * b;
            }
        
        }
    }
    console.log(maxPro);
    return maxPro;

}

findPrime();