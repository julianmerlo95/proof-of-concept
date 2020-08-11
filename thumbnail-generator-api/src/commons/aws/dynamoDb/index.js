/* eslint-disable max-len */
module.exports = (tableName, dynamoDB) => ({
  async putItem(item = {}) {
    try {
      const params = {
        TableName: tableName,
        Item: item,
      };
      await dynamoDB.put(params).promise();
      return item;
    } catch (error) {
      error.code = "insert_image";
      throw error;
    }
  },
});
