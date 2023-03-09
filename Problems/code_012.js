function sequence() {
    let ele = 1;
    const data = [1];
    for (let i = 2; i < 10000; i++){
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
            count++;
        //console.log(count);
        }
    }
    return count;
}
sequence();

