const {logger} = require('../../../commons/logger/index');

module.exports = (tableName, dynamoDB) => ({
  async putItem(item = {}) {
    try {
      const params = {
        TableName: tableName,
        Item: item,
      };
      logger.info({params});
      await dynamoDB.put(params).promise();
      return item;
    } catch (error) {
      logger.error({
        code: "insert_image_dynamo",
        error,
        message: `dynamodb ${error.message}`,
      });
      error.code = "insert_image_dynamo";
      throw error;
    }
  },
});
