function fibonacci(num) {
    let n1 = 0, n2 = 1, next;
    const array = [];
    for (let i = 1; i < 36; i++) {
        next = n1 + n2;
        n1 = n2;
        n2 = next; //n2には、f(n-1) + f(n-2)の値が入っている 
        if((n1%2) === 0) {
            array.push(n1);
        }
    }

    //console.log(array);

    let result = 0;
    for (const ele of array) {
        result += ele;
    }
    console.log(result);
}
fibonacci(100);