const {getDynamoInstance} = require("../../../../commons/aws/dynamoDb/config");
const { images } = require("../../../../commons/utils/index");
const { v4: uuid } = require("uuid");
const dynamoDb = require("../../../../commons/aws/dynamoDb/index")(
  "load-image-api-develop-image-table",
  getDynamoInstance()
);

const createImageDomain = async (image) => {
  try {
    if (image.size > 5120) {
      const error = new Error();
      error.code = "validation_size";
      throw error;
    }
    //added id and new image
    image.id = uuid();
    image.newImages = images;

    return response = await dynamoDb.putItem(image);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createImageDomain,
};
