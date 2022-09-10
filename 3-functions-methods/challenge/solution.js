function createUser(email, password) {
  // same level of abstraction
  validateInput(email, password);

  saveUser(email, password);
}

function validateInput(email, password) {
  // lower level of abstraction
  if (inputIsValid(email, password)) {
    throw new Error("Invalid input!");
    // showErrorMessage("Invalid input!");
    // return;
  }
}

function inputIsValid(email, password) {
  return email && email.includes("@") && password && password.trim() === "";
}

function showErrorMessage(message) {
  console.log(message);
}

function saveUser(email, password) {
  const user = {
    email: email,
    password: password
  };

  database.insert(user);
}
