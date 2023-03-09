function pythagorean() {
    for (let i = 0; i < 1000; i++) {
        for (let j = i; j < 1000; j++) {
            for (let k = j; k < 1000; k++) {
                if((i*i)+(j*j)-(k*k) === 0 && i+j+k === 1000){
                    console.log(i*j*k);
                }
            }
        }
    }
}
pythagorean();