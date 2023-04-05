/*

The series, 11 + 22 + 33 + ... + 1010 = 10405071317.

Find the last ten digits of the series, 11 + 22 + 33 + ... + 10001000.

*/

function series(){
    const limit = 1000;
    let sum = BigInt(0);
    for(let i = 1; i <= 1000; i++){
        sum += BigInt(i) ** BigInt(i);
    }

    const strSum = sum.toString();
    const result = strSum.slice(-10);
    return result;
}
console.log(series());


////////// mod //////////

function modSeries(){
    const limi = 1000;
    let sum = BigInt(0);
    const mod = BigInt(10 ** 10); //末尾10桁の余りの計算のために使う

    for(let k = 1; k <= limi; k++){
        let term = BigInt(k) ** BigInt(k);
        term %= mod; //それぞれの累乗を足し合わせる前に、各要素の末尾10桁の余りを算出している
        sum += term;
        sum %= mod;//各項と合計値の末尾10桁のみを保持する
    }
    return sum.toString();
}

console.log(modSeries());

