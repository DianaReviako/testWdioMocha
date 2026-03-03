
const numbers = [11, 12, 13, 14, 8, 15];
const target = 8;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > target) {
        numbers[i] += 1;
    } else {
       break;
    }
}

console.log(numbers); 
//output [ 12, 13, 14, 15, 8, 15 ]



const numbers_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = [];

for (let i = 0; i < numbers_2.length; i++) {
  if (numbers_2[i] % 2 === 0) {
    result.push(numbers_2[i]);
    continue; 
  }
}
// console.log(result);
//output [ 2, 4, 6, 8, 10 ]

