function prime(N) {
    for(let i=2; i*i <= N; i++) {
        if(N % i === 0) {
            return false;
        }
    }
    return true;
}

function ans(limit){
    let result = 0;
    for(let i=2; i <= limit; i++) { //1入れないのか、気を付ける
        if(prime(i)){
            result+=i;
        }
    }
    console.log(result);
    return result;
}

ans(2000000);