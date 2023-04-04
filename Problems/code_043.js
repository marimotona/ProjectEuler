/*

The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

・d2d3d4=406 is divisible by 2
・d3d4d5=063 is divisible by 3
・d4d5d6=635 is divisible by 5
・d5d6d7=357 is divisible by 7
・d6d7d8=572 is divisible by 11
・d7d8d9=728 is divisible by 13
・d8d9d10=289 is divisible by 17

Find the sum of all 0 to 9 pandigital numbers with this property.



*/

function generateDigit(ele){

    const divisors = [2, 3, 5, 7, 11, 13, 17];
    for(let i=1; i<8; i++){
        const array = parseInt(ele.toString().slice(i, i + 3));
        if(array % divisors[i - 1] !== 0) return false;
    }
    return true;
}
//console.log(generateDigit(1406357289));

function generatePermutations(arr, currentPermutation = []){
    if (arr.length === 0) {
        return [currentPermutation];
    }

    let permutations = [];
    for (let i = 0; i < arr.length; i++) {
      const remainingElements = arr.slice(0, i).concat(arr.slice(i + 1));
      const newPermutation = currentPermutation.concat(arr[i]);
      permutations = permutations.concat(generatePermutations(remainingElements, newPermutation));
    }
  
    return permutations;

}

function divisiblity(){
    let sum = 0;

    const pandigitalNumbers = generatePermutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).map(permutation =>
        parseInt(permutation.join(''), 10)
    );

    for(const ele of pandigitalNumbers){
        if(generateDigit(ele)){
            sum += ele;
        }
    }

    console.log(sum);
    return sum;
    
}
divisiblity();