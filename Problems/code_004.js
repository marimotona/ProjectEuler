function palid(num) {
    let largestPalindrome = 0;
    for(let i = 000; i < 999; i ++) {
        for(let j = i; j < 999; j ++) {
            const result = i * j;

            if(result.toString() === result.toString().split('').reverse().join('') && result > largestPalindrome){
                largestPalindrome = result;
            }
        }
    }
    // const len = array.length;
    // for(let k = 0; k <len/2; k++) {
    //     if(array[k] !== array[len - 1 - k]) {
    //         return false;
    //     }
    //     return true;
    // }
    console.log(largestPalindrome);
}
palid();