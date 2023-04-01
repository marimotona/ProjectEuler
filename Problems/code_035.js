/*

The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?


*/

function prime(N) {
    for(let i=2; i*i <= N; i++) {
        if(N % i === 0) {
            return false;
        }
    }
    return true;
}

function rotations(num) {
    const numStr = num.toString();
    const numRot = [num];

    for(let i=0; i < numStr.length; i++){
        const rotated = numStr.slice(i) + numStr.slice(0, i);
        numRot.push(parseInt(rotated, 10));
    }

    return numRot;
}


function goodPrime() {
    const data = new Set();
    let count = 0;

    for(let i=2; i<= 1000000; i++) {
        if(prime(i)){
            data.add(i); 
        }
    }

    for(const ele of data){
        const allRot = rotations(ele).every((rotation) => data.has(rotation));

        if(allRot){
            count++;
        }
    }

    console.log(count);
    return count;
}

goodPrime();