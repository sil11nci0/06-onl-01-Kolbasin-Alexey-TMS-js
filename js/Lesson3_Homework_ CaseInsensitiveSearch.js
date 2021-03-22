// Нужно модернизировать первое задание с поиском по имени/фамилии без учета регистра

var data = [
  {
    firstName: "Ashton",
    lastName: "Kek",
    age: 40,
  },
  {
    firstName: "Bradley",
    lastName: "Pitt",
    age: 54,
  },
  {
    firstName: "Bradley",
    lastName: "Kek",
    age: 24,
  },
  {
    firstName: "Hannah",
    lastName: "Dakota",
    age: 24,
  },
];

let username = prompt("Please enter user name");
let result = [];

if (username !== null) {
  username = username.toUpperCase();
  for (let user of data) {
    if (
      user.firstName.toUpperCase() === username ||
      user.lastName.toUpperCase() === username
    ) {
      result.push(user);
    }
  }
}

if (result.length > 0) {
  for (let user of result) {
    console.log("User name: " + user.firstName + " " + user.lastName + ".");
    console.log("User age: " + user.age + ".");
  }
} else {
  console.log("No results found for you request");
}
