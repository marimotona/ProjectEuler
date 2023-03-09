function sequence() {
    let ele = 1;
    const data = [1];
    for (let i = 2; i < 100000; i++){
        data.push(ele += i);
    }
    //console.log(data.length);

    for (let j =0; j < data.length; j++) {
        //console.log(data[j]);
        if(countNum(data[j]) > 500) {
            console.log(data[j]);
            return
        }
    }
}
function countNum(ele) {
    let count = 0;
    for(let k = 1; k <= Math.sqrt(ele); k++) {
        //console.log(k*k);
        if(ele % k === 0){
            count+=2;
        //console.log(count);
        }
    }
    return count;
}
sequence();


function triangle() {
    let createTriangle = 0;
    let countTriangle = 1;

    while(true) {
        //これで、数列が作れる
        createTriangle += countTriangle;
        countTriangle++;

        let count = 0;
        for(let k = 1; k <= Math.sqrt(createTriangle); k++) {
            if(createTriangle % k === 0){
                count+=2;
                // if(createTriangle / k !== k) {
                //     count++;
                // }
            }
        }
        if(count >= 500) {
            console.log(createTriangle);
            return createTriangle;
        }
    }

}
//triangle();