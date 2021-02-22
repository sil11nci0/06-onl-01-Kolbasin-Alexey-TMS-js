const numbers = [];

while (numbers.length < 7) {
  let numArray = (Math.random() * 10).toFixed(0);
  if (!numbers.includes(numArray)) {
    numbers.push(numArray);
  }
}
console.log(numbers);
numbers.sort();
console.log(numbers);
