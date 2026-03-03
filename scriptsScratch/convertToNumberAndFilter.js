const stringNumbers = ["15", "25", "8", "30", "12", "45", "19", "22", "5", "38"];

const numbers = stringNumbers.map(Number);
const filteredNumbers = numbers.filter(number => number >= 20);
console.log("Numbers greater or equal to 20:", filteredNumbers);

// Numbers greater or equal to 20: [ 25, 30, 45, 22, 38 ]
