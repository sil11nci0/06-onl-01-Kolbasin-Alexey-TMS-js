const arr = [2, 42, "Check", 11, 5, "Hello"];
function countDataArr(arr) {
  let sum = 0;
  for (let value of arr) {
    if (typeof value === "number") {
      sum += value;
    }
  }
  return "Sum is " + sum;
}
countDataArr(arr);
