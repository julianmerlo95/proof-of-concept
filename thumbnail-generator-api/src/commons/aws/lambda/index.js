const AWS = require("aws-sdk");

function getLambdaInstance() {
  return new AWS.Lambda({
    region: process.env.REGION,
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  });
}

module.exports = { getLambdaInstance };
