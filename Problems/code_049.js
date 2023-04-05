/*

The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.

There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.

What 12-digit number do you form by concatenating the three terms in this sequence?

*/

function eratosthenes() {
    const limit = 9999;
    const primes = new Set();
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
  
    for (let i = 1500; i <= limit; i++) {
      if (isprime[i]) {
        primes.add(i);
      }
    }
  
    return primes;
  }
  
  function check(ele, ele2, ele3) {
    const arr1 = ele.split("").map(Number).sort();
    const arr2 = ele2.split("").map(Number).sort();
    const arr3 = ele3.split("").map(Number).sort();

    return JSON.stringify(arr1) === JSON.stringify(arr2) && JSON.stringify(arr1) === JSON.stringify(arr3);
  }
  
  function arithmetic() {
    const primes = eratosthenes();
    //const result = [];
    let result = "";
  
    for (const ele of primes) {
      let re1 = ele + 3330;
      let re2 = re1 + 3330;
  
      if (primes.has(re1) && primes.has(re2) && check(String(ele), String(re1), String(re2)) === true) {
        //result.push(ele, re1, re2);
        result = String(ele) + String(re1) + String(re2)
      }
    }
  
    return result;
  }
  
  console.log(arithmetic());