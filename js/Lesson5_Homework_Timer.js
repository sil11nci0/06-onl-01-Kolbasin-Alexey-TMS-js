let a = 1;
let MAX_COUNT = 9;
function anyNumber() {
  console.log(a);
  a++;
  if (a > MAX_COUNT) {
    clearInterval(intervalId);
    console.log(`Прошло ${MAX_COUNT} секунд.`);
  }
}

let intervalId = setInterval(anyNumber, 1000);
