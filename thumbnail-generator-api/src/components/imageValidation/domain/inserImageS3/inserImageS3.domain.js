const {getS3Instance} = require("../../../../commons/aws/s3/config");
const S3 = require("../../../../commons/aws/s3/index")(
  process.env.BUCKET,
  getS3Instance()
);

const insertImageS3Domain = async (url, body, callback) => {
  try {
    const response = await S3.putItem(url, body, callback);
    return response;
  } catch (error) {
    error.code = "insert_image_s3";
    throw error;
  }
};

module.exports = {
  insertImageS3Domain,
};
