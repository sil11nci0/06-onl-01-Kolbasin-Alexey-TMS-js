<<<<<<< HEAD
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
=======
function Timer(startNumTimer, endNumTimer) {
  startNumTimer = +prompt("Начало");
  endNumTimer = +prompt("Конец");
  let timer = setInterval(function () {
    if (startNumTimer > endNumTimer) {
      clearInterval(timer);
    } else {
      console.log(startNumTimer++);
    }
  }, 1000);
}

Timer();
>>>>>>> 2330d282ee4c8967195c020bc9bab47bec512d12
