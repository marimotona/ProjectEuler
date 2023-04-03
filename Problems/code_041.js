/*

We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

What is the largest n-digit pandigital prime that exists?


*/

/////////////  code1 //////////////
///////////  TIME OVER ////////////

function prime(num){
    if (num < 2) return false;
    for(let i=2; i*i <= num; i++){
        if(num % i === 0)return false;
    }
    return true;
}

function pandigital(num, snum){
    const strNum = snum.toString();
    let makeNum = "";

    for(let j=1; j<=num; j++){
        makeNum += j;
    }

    for(const ele of makeNum){
        if(!strNum.includes(ele)) return false;;
    }
    //console.log(typeof makeNum);
    return true;
}

function primePun(){

    for(let k=9; k>0; k--){

        for(let l=Math.pow(10, k) - 1; l>0; l--){
            if(prime(l) && pandigital(k, l)){
                console.log(l);
                return;
            }
        }
    }

}
//primePun();


/////////////  code2 //////////////

function generatePandigitals(digits, currentNum = ""){
    //再帰の終了チェック
    if(digits.length === 0){
        return [parseInt(currentNum, 10)];
    }

    //currentNum 生成中のpandigital数
    //pandigitals 全てのpandigitalが格納された配列

    let pandigitals = [];
    for (let i=0; i< digits.length; i++){
        const newDigits = digits.slice(0, i).concat(digits.slice(i + 1));
        pandigitals = pandigitals.concat(
            generatePandigitals(newDigits, currentNum + digits[i])
        );
    }

    return pandigitals;
}

function findPrimePandigital(){
    for(let k = 9; k >= 1; k--){
        const data = Array.from({ length: k}, (_, i) => (i + 1).toString());

        //最大のものから素数チェックするため
        const pandigitals = generatePandigitals(data).sort((a, b) => b - a);

        for(const ele of pandigitals){
            if(prime(ele)) {
                console.log(ele);
                return;
            }
        }
    }
}
findPrimePandigital();
