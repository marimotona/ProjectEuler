/*

In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?


*/

function coinSum () {
    const coins = [1, 2, 5, 10, 20, 50, 100, 200];
    //const table = [0] * 201;
    const table = new Array(201).fill(0);
    table[0] = 1;

    for(const coin of coins) {
        for(let i=coin; i<=200; i++) {

            table[i] += table[i - coin];
        }
    }
    console.log(table[200]);
    return table[200];
}
coinSum();