// expected to createId but they manipulate the id
// change the name to addId instead of createId
// (makes it obvious that the user id will be manipulated)
function addId(user) {
  user.id = "u1";
}

const user = { name: "Max" };
addId(user);

console.log(user);

class User {
  constructor(name) {
    this.name = name;
  }

  addId() {
    this.id = "u1";
  }
}

const customer = new User("Max");
customer.addId(); // clear on what is being done to the customer object
console.log(customer);
