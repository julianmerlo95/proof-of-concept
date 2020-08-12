const {getDynamoInstance} = require("../../../../commons/aws/dynamoDb/config");
const { newImages } = require("../../../../commons/utils/index");
const { v4: uuid } = require("uuid");
const dynamoDb = require("../../../../commons/aws/dynamoDb/index")(
  "load-image-api-develop-image-table",
  getDynamoInstance()
);

const createImageDomain = async (images) => {
 
  if (images.size > 5120) {
    const error = new Error();
    error.code = "validation_size";
    throw error;
  }
  
  try {
    return  await Promise.all(
        images.arrayImages.map(image =>{
        image.id = uuid();
        image.newImages = newImages;
        return dynamoDb.putItem(image);
        })
      );
    } catch (error) {
      throw error;
    }
};

module.exports = {
  createImageDomain,
};
