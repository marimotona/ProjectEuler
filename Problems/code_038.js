/*

Take the number 192 and multiply it by each of 1, 2, and 3:

192 × 1 = 192
192 × 2 = 384
192 × 3 = 576
By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?


*/

function isPand(num) {
    if(num.length !== 9) return false;

    for (const digit of "123456789") {
        if(!num.includes(digit)) return false;
    }

    return true;
}

function concat(){
    let bigsum = 0;
    for(let i=9999; i>=1; i--){
        let eleNum = "";
        let j = 1;
        while(eleNum.length < 9){
            eleNum += (i * j).toString();
            j++;
        }
        if(eleNum.length === 9 && isPand(eleNum)){ //チェックを入れないといけない
            const pandNum = parseInt(eleNum);
            if(bigsum < pandNum){
                bigsum = pandNum;
            }
        };
            
    }
    console.log(bigsum);
    return bigsum;
}

concat();

console.log(99999 * 2);
