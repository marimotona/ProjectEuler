/*

145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the factorial of their digits.

Note: As 1! = 1 and 2! = 2 are not sums they are not included.


*/

function factoria(num) {
    if(num < 2) return 1;
    return num * factoria(num - 1);
}

function curious() {
    let sum = 0;
    for(let i=3; i<=2000000; i++) {
        const str = i.toString();
        let comparison = 0;

        for(const ele of str) {
            comparison += factoria(ele);
        }
        if(i === comparison){
            sum += i;
        }
    }
    console.log(sum);
    return sum;
}


curious();