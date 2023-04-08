function prime(limit) {
    let primes = [];
    let num = 2;
    while(primes.length < limit) {
        if(checkPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    //return primis[limit - 1];
    console.log(primes[limit - 1]);
}

function checkPrime(ele) {
    for (let i = 2; i*i <= ele; i++){
        if(ele % i === 0){
            //console.log("not prime");
            return false;
        }
    }
    return true;
}
prime(10001);


/// 0408 ///

function prime2(){
    let number = 2;
    let count = 0;
    while(count < 10001){
        if(checkPrime(number)){
            count++;
        }
        number++;

        if(count === 10001) {
            return number - 1;
        }
    }
}

console.log(prime2());