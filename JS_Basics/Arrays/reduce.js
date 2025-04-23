const prices = [5, 30, 20, 15, 22, 35];

const total = prices.reduce(sum);

function sum(accumulator, element) {
  return accumulator + element;
}

//console.log(total);

const grades = [22, 54, 75, 87, 95, 100, 15, 17];

let maxGrade = grades.reduce(getMax);
let minGrade = grades.reduce(getMin);

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}
function getMin(accumulator, element) {
  return Math.min(accumulator, element);
}

//console.log(minGrade);
