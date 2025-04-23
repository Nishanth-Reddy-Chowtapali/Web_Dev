const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => {
  console.log("I like " + fruit);
});

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

number.forEach(double);

function double(element) {
  console.log(element * 2);
}
