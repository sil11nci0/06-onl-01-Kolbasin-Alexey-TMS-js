// Если бы было несколько объектов с одинаковым именем/фамилией, то вывел бы последнего

/* var data = [
  {
    firstName: "Ashton",
    lastName: "Kutcher",
    age: 40,
  },
  {
    firstName: "Bradley",
    lastName: "Pitt",
    age: 54,
  },
  {
    firstName: "Hannah",
    lastName: "Dakota",
    age: 24,
  },
];

let firstName = prompt("Please enter user first name");
let lastName = prompt("Please enter user last name");
let result;

if (firstName !== null) {
  for (let user of data) {
    if (user.firstName === firstName || user.lastName === lastName) {
      result = user;
    }
  }
}

if (result !== undefined) {
  console.log("User name: " + result.firstName + " " + result.lastName + ".");
  console.log("User age: " + result.age + ".");
} else {
  console.log("No results found for you request");
}
 */

// Модернизированный код с учетом, что надо вывести всех с одним именем или фамилией
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
  for (let user of data) {
    if (user.firstName === username || user.lastName === username) {
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
