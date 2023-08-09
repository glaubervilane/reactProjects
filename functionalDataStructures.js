const anArrayMixedElements = [1, "hello", 80, "world", 24, "javascript", 6, 99, "LHL", 12, "bootcamp", 45, 3];

const filteredArray = anArrayMixedElements.filter(element => {
  return typeof element === 'number'; 
});

console.log(filteredArray);

const higherThanFifty = filteredArray.find(num => {
  return num > 50;
});

console.log(higherThanFifty);

const sumOfAllNumbers = filteredArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); 

console.log(sumOfAllNumbers);