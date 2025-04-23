const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let squaresArray = numbers.map(square);

function square(element) {
  return Math.pow(element, 2);
}

//console.log(squaresArray);

const avengers = [
  "ironman",
  "thor",
  "hulk",
  "catpain america",
  "hawkeye",
  "balck widow",
];

let avengerUpper = avengers.map(upper);

function upper(element) {
  return element.toUpperCase();
}

function lower(element) {
  return element.toLowerCase();
}

//console.log(avengerUpper);

const dates = [
  "2025-1-10",
  "2025-2-20",
  "2025-3-30",
  "1998-05-10",
  "1997-12-21",
];

let formatedDates = dates.map(format);

console.log(formatedDates);

function format(element) {
  const parts = element.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}
