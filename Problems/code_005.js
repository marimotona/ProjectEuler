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

function divNum(limit) {
    let small = limit;
    let isDivis = false;

    while(!isDivis) {
        isDivis = true;

        for(let i = limit- 1; i >=2; i--) {
            if(small % i !== 0) {
                isDivis = false;
                break;
            }
        }

        if(!isDivis) {
            small += limit;
        }
    }
    return small;
}
console.log(divNum(20));