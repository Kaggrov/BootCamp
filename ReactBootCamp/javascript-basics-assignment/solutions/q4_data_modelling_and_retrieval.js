// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast

// Write your code here

const fruitArray = [
  {
    name: "Apple",
    color: "red",
    pricePerKg: "100",
  },
  {
    name: "Bannana",
    color: "yellow",
    pricePerKg: "120",
  },
  {
    name: "Kiwi",
    color: "green",
    pricePerKg: "200",
  },
  {
    name: "Papaya",
    color: "orange",
    pricePerKg: "50",
  },
  {
    name: "Water Melon",
    color: "green",
    pricePerKg: "80",
  },
];

const FastRetrieval = (arr) => {
  const InitialObject = {};

  let result = arr.reduce((obj, item) => {
    return {
      ...obj,
      [item['name']]: item,
    };
  }, InitialObject);

  return result;
};

const FruitObj = FastRetrieval(fruitArray)
console.log(FruitObj['Apple'].color)
console.log(FruitObj['Papaya'].pricePerKg)