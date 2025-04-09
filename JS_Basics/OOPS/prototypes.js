let computer = {
  cpu: 12,
};

let lenovo = {
  screen: "HD",
  __proto__: computer,
};

let tomhardware = {};

//console.log(`lenovo`, lenovo.cpu);

let genericCar = {
  tyres: 4,
};

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

console.log(`tesla`, tesla.tyres);
