// pure
function generateId(userName) {
  const id = "id_" + userName;
  return id;
}

// impure
function generateId(userName) {
  const id = userName + Math.random().toString();
  return id;
}

let lastAssignedId;

// side effect
// assigned id to a global variable "lastAssignedId"
function generateId(userName) {
  const id = "id_" + userName;
  lastAssignedId = id;
  return id;
}
