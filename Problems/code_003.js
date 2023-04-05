/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

function prime(n){
    const data = [];
    let divi = 2;
    while(n > 1){
        while(n % divi === 0){
            data.push(divi);
            n /= divi;
        }
        divi++;
    }
    return data[data.length - 1];
}

console.log(prime(600851475143));