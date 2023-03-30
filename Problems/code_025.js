/*

The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
 
*/


function fib() {
    const a =[];
    a[1] = 1, a[2] = 1;
    const result = []

    for (let i=3; i<=12; i++) {
        a[i] = a[i-1] + a[i-2];
        if(a[i])
        result.push(a[i]);
        // console.log(a[i]);
    }
    console.log(result);
}
//fib();

function firstNDigitFibonacci(n) {
    let a = BigInt(1);
    let b = BigInt(1);
    let index = 2;
    const target = BigInt(10) ** BigInt(n - 1);
  
    while (b < target) {
      const temp = b;
      b = a + b;
      a = temp;
      index++;
    }
  
    return { value: b, index: index };
  }
  
  const result = firstNDigitFibonacci(1000);
  console.log(`初めて1000桁になる要素: ${result.value}`);
  console.log(`その要素のインデックス: ${result.index}`);