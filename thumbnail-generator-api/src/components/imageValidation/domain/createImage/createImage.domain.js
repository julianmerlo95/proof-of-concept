const {getDynamoInstance} = require("../../../../commons/aws/dynamoDb/config");
const { images } = require("../../../../commons/utils/index");
const dynamoDb = require("../../../../commons/aws/dynamoDb/index")(
  process.env.IMAGE_TABLE,
  getDynamoInstance()
);

const createImageDomain = async (image) => {
  try {
    if (image.size > 5120) {
      const error = new Error();
      error.code = "validation_size";
      throw error;
    }
    //added new images
    image.newImages = images;

    return response = await dynamoDb.putItem(image);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createImageDomain,
};
