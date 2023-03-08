function devide(limit) {
    let count = limit;
    let sum = limit * limit -1;
    for (let i = 1; i < 100; i++) {
        const result = sum * i;
        //console.log(result);
        // if(result % count === 0) {
        //     count--;
        // }
        // if (count === 1) {
        //     console.log(result);
        // }
        for (let j = 0; j < limit; j ++) {
            if(result % count === 0) {
                count--;
            }
            if (count === 1) {
                console.log(result);
            }
        }
    }
}

devide(20);