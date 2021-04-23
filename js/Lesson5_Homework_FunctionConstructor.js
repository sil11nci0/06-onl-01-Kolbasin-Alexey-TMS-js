function MyConstructor(arr) {
  this.data = arr;

  this.getElementsCount = function () {
    return this.data.length;
  };
  this.getArraySymbolsCount = function () {
    const result = [];
    for (let value of this.data) {
      result.push(value.length);
    }
    return result;
  };

  this.getArrayAsString = function () {
    return this.data.join(",");
  };
}

const a = new MyConstructor([1, 2, 3, "a", "g", "d", null]);
const b = new MyConstructor(["Пирамида", "Юг"]);

console.log(a.getElementsCount());
console.log(b.getArraySymbolsCount());
console.log(b.getArrayAsString());
