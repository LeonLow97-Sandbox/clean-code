class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

let user = new User("Max", 31, "max@test.com");

// takes 1 argument in the constructor instead of 3
class User {
  constructor(userData) {
    this.name = userData.name;
    this.age = userData.age;
    this.email = userData.email;
  }
}

// more readable
user = new User({ name: "Max", email: "max@test.com", age: 31 });

function compare(a, b, comparator) {
  if (comparator === "equal") {
    return a === b;
  } else if (comparator === "not equal") {
    return a !== b;
  } else if (comparator === "greater") {
    return a > b;
  } else if (comparator === "smaller") {
    return a < b;
  }
}

let isSmaller = compare(3, 5, "smaller");
let isEqual = compare(3, 5, "equal");

// this is better, extracted the values by keys!
function compare(comparisonData) {
  let { first, second, comparator } = comparisonData;
  if (comparator === "equal") {
    return first === second;
  } else if (comparator === "not equal") {
    return first !== second;
  } else if (comparator === "greater") {
    return first > second;
  } else if (comparator === "smaller") {
    return first < second;
  }
}

isSmaller = compare({ first: 3, second: 5, comparator: "smaller" });
isSmaller = compare({ comparator: "equal", first: 3, second: 5 });
