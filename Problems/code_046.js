/*

It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

        9 = 7 + 2×12
        15 = 7 + 2×22
        21 = 3 + 2×32
        25 = 7 + 2×32
        27 = 19 + 2×22
        33 = 31 + 2×12

It turns out that the conjecture was false.

What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?


*/

// function prime(N) {
//     if (N < 2) return false;
//     for(let i=2; i*i <= N; i++) {
//         if(N % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

function eratosthenes(limit){
    const primes = [];
    const isprime = new Array(limit + 1).fill(true);

    isprime[0] = false;
    isprime[1] = false;

    for(let j=2; j*j <= limit; j++) {
        if(isprime[j]) {
            for(let k = j * j; k <= limit; k += j){
                isprime[k] = false;
            }
        }
    }

    for (let i = 2; i <= limit; i++) {
        if (isprime[i]) {
            primes.push(i);
        }
    }

    return primes;
}

function isTwice(num){
    const sqrValue = Math.sqrt(num / 2);
    return Number.isInteger(sqrValue); //sqrValueが整数かどうか
}

function christin(){
    const limit = 10000;
    const primes = eratosthenes(limit);

    for(let p = 9; p < limit; p += 2){
        if(primes.includes(p)){ //素数である場合を除く、合成数の奇数だけ残る
            continue;
        }

        let found = false;

        for(const prime of primes){
            if(prime >= p){ //合成数がpより大きくなった場合、ループが終了する
                break;
            }

            const remain = p - prime;
            if(isTwice(remain)) {
                found = true;
                break;
            }
        }
    
        if(!found){
            return p;
        }
    }
}

console.log(christin());