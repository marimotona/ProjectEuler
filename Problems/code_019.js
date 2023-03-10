const notUru = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const uru = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let year = 365;
let count = 0;

// let special = 365;
// for(const ele of notUru) {
//     if(special % 7 === 6) {
//         count++;
//     }
//     special += ele;
// }
function Uru() {
    for (let i = 1901; i <= 2000; i++) {
        if(i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)){
            for (const ele of uru) {
                if(year % 7 === 6) {
                    count++;
                }
                year += ele;
            }
        } else {
            for (const ele of notUru) {
                if(year % 7 === 6) {
                    count++;
                }
                year += ele;
            }
        }
    }
    return count;
}
console.log(Uru());

