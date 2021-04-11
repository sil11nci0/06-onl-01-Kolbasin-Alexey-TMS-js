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
