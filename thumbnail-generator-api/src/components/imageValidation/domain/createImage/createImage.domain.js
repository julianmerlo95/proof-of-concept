const {getDynamoInstance} = require("../../../../commons/aws/dynamoDb/config");
const {getLambdaInstance} = require("../../../../commons/aws/lambda/index");
const {arrayNewImages} = require("../../../../commons/utils/index");
const lambda = getLambdaInstance();
const { v4: uuid } = require("uuid");
const dynamoDb = require("../../../../commons/aws/dynamoDb/index")(
  process.env.IMAGE_TABLE,
  getDynamoInstance()
);


const createImageDomain = async (images) => {
  let pathS3;

  if (images.size > 5120) {
    const error = new Error();
    error.code = "validation_size";
    throw error;
  }

  try {
    return await Promise.all(
      images.arrayImages.map(async (image) => {
        const responseS3 = await lambda
          .invoke({
            FunctionName: process.env.LAMBDA_S3,
            Payload: JSON.stringify({
              message: {
                url: image.path,
                body: image.path,
              },
            }),
          })
          .promise();
        const payload = JSON.parse(responseS3.Payload);
        pathS3 = JSON.parse(payload.body);
        //asign properties
        image.id = uuid();
        image.pathS3 = pathS3;
        image.newImages = arrayNewImages;
        return dynamoDb.putItem(image);
      })
    );
  } catch (error) {
    error.code = "promise_all";
    throw error;
  }
};

module.exports = {
  createImageDomain,
};
