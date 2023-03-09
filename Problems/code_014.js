function recurrence(){
    let max = 0;
    let result = 0;
    for (let i = 1; i < 1000000; i++) {
        //let n = 13;
        let count = 1;
        let n = i;
        while(n !== 1) {
            if(n % 2 === 0){
                n = n / 2;
                count++;
            } else {
                n = 3*n + 1;
                count++;
            }
        }
        if(count > max) {
            max = count;
            result = i;
        }
    }
    console.log(max);
    console.log(result);
    return max;
}
recurrence();