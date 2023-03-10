
let multi = 1n;
for (let i = 1; i <= 1000; i++) {
    multi *= 2n;
}
//console.log(multi);
let result = 0n;
const array = multi.toString().split('');
//console.log(array);
for (let j = 0; j < array.length; j++) {
    //console.log(parseInt(array[j], 10));
    //result += parseInt(array[j], 10);
    result += BigInt(array[j]);
    //console.log(result);
}
// for(const ele of array) {
//     console.log(parseInt(ele, 10));
//     result += parseInt(ele, 10);
//     console.log(result);
// }
console.log(result.toString());