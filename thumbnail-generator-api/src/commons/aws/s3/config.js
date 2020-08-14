const AWS = require("aws-sdk");

const S3 = new AWS.S3({
  s3ForcePathStyle: true,
  region: process.env.REGION,
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
});

function getS3Instance() {
  return S3;
}

module.exports = { getS3Instance };
