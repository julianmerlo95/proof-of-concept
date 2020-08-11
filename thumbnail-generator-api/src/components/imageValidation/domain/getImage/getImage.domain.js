const {
  getDynamoInstance,
} = require("../../../../commons/aws/dynamoDb/config");
const dynamoDb = require("../../../../commons/aws/dynamoDb/index")(
  "load-image-api-develop-image-table",
  getDynamoInstance()
);

const getImageDomain = async (id) => {
  try {
    const response = await dynamoDb.getItem({ id });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getImageDomain,
};
