const fs = require('fs');

// Import input
let origin;
try {
  origin = fs.readFileSync('./Calories/input.txt', 'utf8');
} catch (err) {
  console.error(err);
}

// Split the list into an array
strGroups = origin.split('\n\r').map((v) => v.replace('\n', ''));

numberGroups = (group) => {
  const strList = group.map((v) => v.split(/[\s(r\n\r)(\r\n)\r)]+/));
  const numList = strList.map((calories) => {
    var numCalories = calories.map((calorie) => Number(calorie));
    var removeZero = numCalories.filter((number) => {
      return number !== 0;
    });
    return removeZero;
  });
  return numList;
};

// Add elements within groups
sumGroup = (arrayNumbers) => {
  var sum = 0;
  for (var i = 0; i < arrayNumbers.length; i++) {
    sum += arrayNumbers[i];
  }
  return sum;
};
ElvesNumber = numberGroups(strGroups);

// Summed calories from each elf
const totalSum = ElvesNumber.map(sumGroup);

// Highest calorie
const higherCalorie = Math.max.apply(null, totalSum);

// Putting in decimal order
const sortedSums = [...totalSum].sort((num1, num2) => num2 - num1);

/* Cutting and transforming into a new array copies the old array with the first 3 of the index */
const top3Sums = sortedSums.slice(0, 3);

// Sum of Top 3
const sumOfTop3 = top3Sums.reduce((total, item) => {
  return total + item;
});

// Transferring to the console
console.log('Separando por elfos', strGroups);
console.log('Separando as calorias em números:', ElvesNumber);
console.log('Total calories for each elf:', totalSum);

// Elf with the highest calorie
console.log('Maior caloria:', higherCalorie);
console.log('desceding order:', sortedSums);
console.log('Top 3 Elves with the most calories:', top3Sums);

// Highest added calorie among the three
console.log('Highest added calorie among the three:', sumOfTop3);
