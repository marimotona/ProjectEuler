// function prime(num) {
//     if (num < 2) return false;
//     for(let i = 2; i * i <= num; i++) {
//         if(num % i === 0) return false;
//     }
//     return true;
// }

// function divi(ele) {
//     if (ele === 1 || !prime(ele)) return 0;
//     let reminder = 1;
//     let count  = 0;

//     while (ele % 2 === 0) ele /= 2;
//     while (ele % 5 === 0) ele /= 5;
//     if (ele === 1) return 0;

//     while(reminder !== 1 && reminder !== 0) {
//         reminder = (reminder * 10) % ele;
//         count++;
//     }
//     return reminder === 0 ? 0 : count;
// }

// function fraction() {
//     let length = 0;
//     let cycle = 0;
//     for(let i = 2; i < 1000; i++) {
//         const cyclelength = divi(i);
//         if(length < cyclelength){
//             length = cyclelength;
//             cycle = i;
//         }
//     }
//     console.log(cycle);
//     return cycle;
// }
// fraction();

function prime(num) {
    if (num < 2) return false;
    for(let i = 2; i * i <= num; i++) {
        if(num % i === 0) return false;
    }
    return true;
}

function divi(ele) {
    if (ele === 1 || !prime(ele)) return 0;
    let reminder = 1;
    let count  = 0;
    // 非循環部分をスキップ
    while (ele % 2 === 0) ele /= 2;
    while (ele % 5 === 0) ele /= 5;
    if (ele === 1) return 0;
    // 循環部分の長さを計算
    do {
        reminder = (reminder * 10) % ele;
        count++;
    } while(reminder !== 1);
    return count;
}

function fraction() {
    let length = 0;
    let cycle = 0;
    for(let i = 2; i < 1000; i++) {
        const cyclelength = divi(i);
        if(length < cyclelength){
            length = cyclelength;
            cycle = i;
        }
    }
    console.log(cycle);
    return cycle;
}
fraction();




