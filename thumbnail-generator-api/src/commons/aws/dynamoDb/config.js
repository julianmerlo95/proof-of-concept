const AWS = require("aws-sdk");
const {isLocal} = require("../../utils");

const dynamoLocal = {
  region: "localhost",
  endpoint: "http://localhost:8000",
  accessKeyId: "DEFAULT_ACCESS_KEY",
  secretAccessKey: "DEFAULT_SECRET",
};

function getDynamoInstance() {
  if (isLocal()) {
    return new AWS.DynamoDB.DocumentClient(dynamoLocal);
  }
  return new AWS.DynamoDB.DocumentClient({
    region: process.env.REGION,
  });
}

module.exports = { getDynamoInstance };
