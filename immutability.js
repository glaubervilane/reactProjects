//Objects
const object = {
  key: "Value of Key",
};

const copyOfObject = { ...object };

//Arrays
const arrayOfNumbers = [1, 2, 3, 4, 5];

const copyArrayOfNumbers = [...arrayOfNumbers];

console.log(object);
console.log(copyOfObject);

console.log(arrayOfNumbers);
console.log(copyArrayOfNumbers);