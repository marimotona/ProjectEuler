/*


A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.


*/




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
//pythagorean();

var a, b,c;
var pos1,pos2,pos3;
var ans1,ans2,ans3;

for(let n=2; n<=20000;n++) {
    a = 2*n+1;
    b = 2*n*(n+1);
    c = 2*n*(n+1)+1;
    if(a<b<c){
        if (Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2)) {
            pos1 = a;
            pos2 = b;
            pos3 = c;
        }
        if (a + b + c === 1000) {
            ans1 = a;
            ans2 = b;
            ans3 = c;
        }
    }
    
}
console.log(ans1+ans2+ans3);