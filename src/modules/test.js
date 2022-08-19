const date = new Date();
const n = date.getDay();
let sum = 0;
let dayIndex = [];
let count = n;

for (let i = 1; i < 8; i++) {
  if (count <= 6) {
    sum = count;
  } else if (count > 6) {
    sum = count - 7;
  }
  count++;
  dayIndex.push(sum);
}

let n1 = dayIndex[1];
let n2 = dayIndex[2];
let n3 = dayIndex[3];
let n4 = dayIndex[4];
let n5 = dayIndex[5];
let n6 = dayIndex[6];

console.log(n, n1, n2, n3, n4, n5, n6);
