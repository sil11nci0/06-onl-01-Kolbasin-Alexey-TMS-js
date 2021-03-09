const data = [
  {
    product: "Молоко",
    price: 40,
    count: 2,
  },
  {
    product: "Картошка",
    price: 14,
    count: 10,
  },
  {
    product: "Минералка",
    price: 29,
    count: 2,
  },
  {
    product: "Хлеб",
    price: 19,
    count: 1,
  },
  {
    product: "Конфеты",
    price: 11,
    count: 15,
  },
];

const familyMoney = +prompt("Сколько у Вас денег?");

let cost = 0;
if (familyMoney > 0) {
  for (i = 0; i < data.length; i++) {
    cost += data[i].price * data[i].count;
  }
  alert(
    `Ваша семья сможет прожить ${(familyMoney / cost).toFixed(
      0
    )} целых дней. Остаток средств составляет ${familyMoney % cost}`
  );
} else {
  alert(`У вас ${familyMoney} денег. Введите корректное значение`);
}
