/*

If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

{20,11,52}, {24,45,51}, {30,40,50}

For which value of p ≤ 1000, is the number of solutions maximised?


*/


function pythagorean(a, b, c) {
    return a * a + b * b === c * c;
}

function triangle(limit){
    let maxCount = 0;
    let maxP = 0;

    for(let p=1; p<=limit; p++){
        let count = 0;
        for(let a=1; a<p/2; a++){
            for(let b=a; b<p/2; b++){
                let c = p - a - b;

                if(pythagorean(a, b, c)){
                    count++;
                }
            }
        }

        if(maxCount < count){
            maxCount = count;
            maxP = p;
        }
    }

    console.log(maxP);
    return maxP;

}
triangle(1000);