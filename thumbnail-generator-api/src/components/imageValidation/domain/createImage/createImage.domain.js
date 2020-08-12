const {getDynamoInstance} = require("../../../../commons/aws/dynamoDb/config");
const { arrayNewImages } = require("../../../../commons/utils/index");
const { v4: uuid } = require("uuid");
const dynamoDb = require("../../../../commons/aws/dynamoDb/index")(
  "load-image-api-develop-image-table",
  getDynamoInstance()
);
const { upload } = require("../../../../commons/utils/multer");


const createImageDomain = async (images) => {
 
  if (images.size > 5120) {
    const error = new Error();
    error.code = "validation_size";
    throw error;
  }
  
  try {
    return  await Promise.all(
      images.arrayImages.map(image =>{
        upload.single('path')
        image.id = uuid();
        image.newImages = arrayNewImages;
        return dynamoDb.putItem(image);
        })
      );
    } catch (error) {
      error.code = "promise_all"
      throw error;
    }
};

module.exports = {
  createImageDomain,
};
