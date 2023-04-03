/*

The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

*/

function prime(N) {
    if (N < 2) return false;
    for(let i=2; i*i <= N; i++) {
        if(N % i === 0) {
            return false;
        }
    }
    return true;
}

function down(num){
    const array = [];
    const strND = num.toString();
    for(let i=0; i<strND.length; i++){
        //array.push(parseInt(strND.slice(i)));
        if(!prime(parseInt(strND.slice(i)))){
            return false;
        }
    }
    //return array;
    return true;
}
//console.log(down(3797));

function up(num){
    const array = [];
    const strNU = num.toString();
    for(let i=0; i<strNU.length; i++){
        //0 ~ strNU.length - iを抜いた要素を作成している
        //array.push(parseInt(strNU.slice(0, strNU.length - i)));
        if(!prime(parseInt(strNU.slice(0, strNU.length - i)))){
            return false;
        }
    }
    //return array;
    return true;
}
//console.log(up(3797));

let count = 0;
let sum = 0;
let i =10;

function interestPrime(num){
    while (count < 11){
        if(prime(i) && down(i) && up(i)){
            sum += i;
            count++;
        }
        i++;
    }
    console.log(sum);
    return sum;
}

interestPrime();