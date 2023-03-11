function divisor(num) {
    let end = Math.floor(num / 2);
    let sum = 0;
    for (let i = 1; i <= end; i++) {
        if(num % i === 0) {
            sum += i;
        }
    }
    return sum;
}

function amicable() {
    let result = 0;
    let divisorData = [];
    for (let k = 0; k <= 10000; k++) {
       divisorData[k] = divisor(k);
    }
    for (let j = 1; j <= 10000; j++) {
        let divisiorSums = divisorData[j]; //j番目の約数の和が格納してある
        //j=220の時、divisorData[j] === 284 === divisiorSum
        if(divisiorSums <= 10000 && divisiorSums !== j && divisorData[divisiorSums] === j){
            //divisorData[divisiorSums] === divisorData[284] === 220
            result += j;
        }
    }
    return result;
}
//divisor(284);
console.log(amicable());