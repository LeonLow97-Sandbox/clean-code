function log(message, isError) {
  if (isError) {
    console.error(message);
  } else {
    console.log(message);
  }
}

// unsure what this function does unless you fully look at the function
log("Hi there!", false);

function log(message) {
  console.log(message);
}

function logError(errorMessage) {
  console.error(errorMessage);
}

log("Hi there!");
logError("An error!");
