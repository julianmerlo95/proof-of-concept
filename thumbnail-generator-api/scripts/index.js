const npm = require("npm");
const concurrently = require("concurrently");
const fs = require("fs");
const path = require("path");
const dynamoPath = path.join(process.cwd(),".dynamodb");

//check if install dynamodb
function checkDynamo() {
  if (!fs.existsSync(dynamoPath)) {
  executeCommand({
    command: "sls dynamodb install",
    name: "dynamodb install",
  });
  }
  return;
}

//Execute command
function executeCommand(options) {
  concurrently(
    [{ command: options.command, name: options.name }],
    options.params
  ).then(
    () => {
      return;
    },
    (err) => {
      return err
    }
  );
}

function start() {
  checkDynamo();
  executeCommand({
    command: "sls dynamodb start",
    name: "dynamodb start",
  });
  executeCommand({
    command: "sls offline",
    name: "sls-offline",
  });
}

start();
