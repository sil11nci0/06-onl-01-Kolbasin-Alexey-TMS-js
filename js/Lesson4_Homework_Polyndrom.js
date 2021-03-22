function isPalindrom(str) {
  const reversed = str.split(``).reverse().join(``);
  return str === reversed;
}

console.log(isPalindrom("asdffdsa"));
