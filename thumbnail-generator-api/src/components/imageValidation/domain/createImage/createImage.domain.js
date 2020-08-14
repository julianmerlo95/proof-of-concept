const {getDynamoInstance} = require("../../../../commons/aws/dynamoDb/config");
const {arrayNewImages} = require("../../../../commons/utils/index");
const dynamoDb = require("../../../../commons/aws/dynamoDb/index")(
  process.env.IMAGE_TABLE, getDynamoInstance());
const {logger} = require('../../../../commons/logger/index');
const { v4: uuid } = require("uuid");


const createImageDomain = async (images) => {

  if (images.size > 5120) {
    logger.error({
      code: 'validation_size',
      error,
      message: `createImage_domain ${error.message}`,
    });
    const error = new Error();
    error.code = "validation_size";
    throw error;
  }

  try {
    return await Promise.all(
      images.arrayImages.map( (image) => {
        //assign properties
        image.id = uuid();
        image.newImages = arrayNewImages;
        return dynamoDb.putItem(image);
      })
    );
  } catch (error) {
    logger.error({
      code: "promise_all",
      error,
      message: `createImage_domain ${error.message}`,
    });
    error.code = "promise_all";
    throw error;
  }
};

module.exports = {
  createImageDomain,
};
