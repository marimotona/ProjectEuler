/*

The prime 41, can be written as the sum of six consecutive primes:

41 = 2 + 3 + 5 + 7 + 11 + 13
This is the longest sum of consecutive primes that adds to a prime below one-hundred.

The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the most consecutive primes?

*/

function eratosthenes(limit) {
    const primes = [];
    const isprime = new Array(limit + 1).fill(true);
  
    isprime[0] = false;
    isprime[1] = false;
  
    for (let j = 2; j * j <= limit; j++) {
      if (isprime[j]) {
        for (let k = j * j; k <= limit; k += j) {
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

function prime(N) {
    if (N < 2) return false;
    for(let i=2; i*i <= N; i++) {
        if(N % i === 0) {
            return false;
        }
    }
    return true;
}

const primes = eratosthenes(1000000);

function sumPrime(){
    let big = 0;
    let maxRun = 0;

    for(let i = 0; i < primes.length; i++){
        let sum = 0;
        let run = 0;
        for (let j = i; j < primes.length; j++){
            sum += primes[j];
            run++;

            if (sum > 1000000) {
                break;
            }

            if(prime(sum) && run > maxRun){
                big = sum;
                maxRun = run;
            }
        }
    }
    
    return big;
}
console.log(sumPrime());