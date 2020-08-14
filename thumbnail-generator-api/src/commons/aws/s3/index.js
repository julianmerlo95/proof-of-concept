/* eslint-disable max-len */
module.exports = (bucket, S3) => ({
  async putItem(key, body, callback) {
    try {
      console.log(bucket);
      console.log(key);
      console.log(body);
      const response = S3.putObject(
        {
          Bucket: "load-image-bucket-s3",
          Key: `s3/https://load-image-buckets-s3.s3.amazonaws.com/${key}`,
          Body: `https://load-image-buckets-s3.s3.amazonaws.com/${body}`,
        },
        () => {
          return callback(null, "ok");
        }
      );
      return response;
    } catch (error) {
      error.code = "insert_image_s3";
      throw error;
    }
  },
});
