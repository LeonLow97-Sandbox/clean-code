function initApp() {
  const success = connectDatabase();
  if (!success) {
    console.log("Could not connect to database! ");
  }
}

// side effect expected
// changes overall system and project state
function connectDatabase() {
  const didConnect = database.connect(); // side effect (established connection to database)
  return didConnect;
}

// side effect unexpected
function determineSupportAgent(ticket) {
  if (ticket.requestType === "unknown") {
    return findStandardAgent();
  }
  return findAgentByRequestType(ticket.requestType);
}

function createUser(email, password) {
  if (!isValid(email, password)) {
    console.log("Invalid input!"); // side effect
  }
}

// side effect unexpected
// clean and pure function now after removing the console.log because
// it now returns the same response values
function isValid(email, password) {
  if (!email.includes("@") || password.length < 7) {
    return false;
  }
  return true;
}
