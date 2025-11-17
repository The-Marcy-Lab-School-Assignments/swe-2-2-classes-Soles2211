class Rectangle {
  constructor (length, width) {
    this.length = length;
    this.width = width; 
  }
  getArea () {
    return this.length * this.width
  }
  getPerimeter () {
    return (this.length * 2 + this.width * 2);
  }
  isSquare () {
    if (this.length === this.width) {
      return true;
    } else {
      return false;
    }
  }

}

// const myShape = new Rectangle(10, 5); // length = 10, width = 5
// console.log(myShape.getArea()); // 50
// console.log(myShape.getPerimeter()); // 30 (10 * 2 + 5 * 2)
// console.log(myShape.isSquare()); // false

// // length and width are public properties so we can mutate them
// myShape.width = 3;
// myShape.length = 3;
// console.log(myShape.getArea()); // 9
// console.log(myShape.getPerimeter()); // 12
// console.log(myShape.isSquare()); // true

class Vehicle {
  passengers = [];
  color = "black";
  constructor (type, capacity, color) {
    this.type = type;
    this.capacity = capacity;
    if (color) this.color = color;
  }
  paint(color) {
    return this.color = color;
  }
  addPassenger(passenger) {
    if (this.passengers.length === this.capacity) {
      return -1;
    } else {
      this.passengers.push(passenger);
      return this.passengers.length;
    }
  }
}

// const bus = new Vehicle('School Bus', 48, 'yellow');
// console.log(bus.color); // yellow

// const motorcycle = new Vehicle('Motorcycle', 2);
// console.log(motorcycle.color); // black

// console.log(motorcycle.addPassenger('Bonnie')); // 1
// console.log(motorcycle.addPassenger('Clyde')); // 2
// console.log(motorcycle.addPassenger('Toto')); // -1 (not enough capacity, not added)

// console.log(motorcycle.passengers); // ['Bonnie', 'Clyde']

class PasswordManager {
  #password;
  constructor(password) {
    this.#password = password;
  }
  checkPassword(attempt) {
    return this.#password === attempt ? true : false;
  }
  setPassword(oldPassword, newPassword) {
    if (oldPassword === this.#password) {
      this.#password = newPassword;
      return true;
    } else {
      return false;
    }
  }
}

// const myPW = new PasswordManager('abc');
// console.log(myPW.checkPassword('abc')); // true
// console.log(myPW.checkPassword('blah')); // false

// console.log(myPW.setPassword('blah', 'foobar')); // false
// console.log(myPW.setPassword('abc', 'foobar')); // true

// console.log(myPW.checkPassword('foobar')); // true

class TodoList {
  #items = [];
  constructor(title) {
    this.title = title;
  }
  addItem (description) {
    this.#items.push(description)
    return this.#items.length;
  }
  removeItem(description) {
    if (this.#items.every((item) => item !== description) === true) {
      return null;
    } else {
      this.#items.splice(this.#items.indexOf(description), 1);
      return description;
    }
  }
  getItems() {
    return [...this.#items];
  }

}

// const groceryList = new TodoList('groceries');
// console.log(groceryList.getItems()); // []

// console.log(groceryList.addItem('bread'));  // 1
// console.log(groceryList.addItem('milk'));   // 2
// console.log(groceryList.addItem('eggs'));   // 3
// console.log(groceryList.getItems()); // ['bread', 'milk', 'eggs']

// console.log(groceryList.removeItem('milk'));   // milk
// console.log(groceryList.removeItem('cheese')); // null
// console.log(groceryList.getItems()); // ['bread', 'eggs']

// // Get a copy of the internal array
// const items = groceryList.getItems();
// items.length = 0;

// // The internal array is not affected by the previous statement
// console.log(groceryList.getItems()); // ['bread', 'eggs'] 

class BankAccount {
  #balance = 0;
  static #allHoldings = 0;
  constructor(firstName, lastName, balance) {
    this.firstName = firstName;
    this.lastName = lastName;
    if (balance) this.#balance = balance;
    BankAccount.#allHoldings += this.#balance;
  }
  showBalance() {
    return `Your balance is $${this.#balance.toFixed(2)}`;
  }
  deposit(amount) {
    if (Number.isNaN(amount)){
      return;
    } else {
    this.#balance += amount;
    BankAccount.#allHoldings += amount
    return `Your balance is $${this.#balance.toFixed(2)}`;
    }
  }
  withdraw(amount) {
    if (Number.isNaN(amount)){
      return;
    }
    if (amount > this.#balance) {
      return `You do not have enough funds.`;
    } else {
    this.#balance -= amount;
    BankAccount.#allHoldings -= amount;
    return `Your balance is $${this.#balance.toFixed(2)}.`
    }
  }
  static getTotalHoldings() {
    return BankAccount.#allHoldings;
  }
}

const account1 = new BankAccount('Alan', 'Turing'); // starts with 0 balance
const account2 = new BankAccount('Ada', 'Lovelace', 100); // starts with 100 balance

console.log(account1.deposit(50));    // prints "Your new balance is $50.00"
console.log(account1.deposit(20.5));  // prints "Your new balance is $70.50"
console.log(account1.withdraw(10));   // prints "Your new balance is $60.50"
console.log(account1.withdraw(100));  // prints "You do not have enough funds"

console.log(BankAccount.getTotalHoldings()); // prints 160.50

module.exports = {
  Rectangle,
  Vehicle,
  PasswordManager,
  TodoList,
  BankAccount,
};
