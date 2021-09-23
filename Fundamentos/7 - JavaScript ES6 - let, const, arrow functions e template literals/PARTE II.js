

let a = 5;
let receb = [a];
for (let index = 1; index <= a+1; index += 1) {
  if (a > index) {
    let diminui = a - index;
    receb.push(diminui)
  }
}

console.log(receb)

// let rec2 = [];
// for (let ind = 0; ind <= a; index +=1) {
//   rec2 = receb[ind] * receb[ind];
// }

// console.log(rec2)