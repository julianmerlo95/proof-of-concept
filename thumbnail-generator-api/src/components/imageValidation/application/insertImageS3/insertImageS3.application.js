const {insertImageS3Domain} = require("../../domain/inserImageS3/inserImageS3.domain");
const errorApi = require("../../../../commons/utils/errors/api.errors.json");
const {send, errorHandler} = require("../../../../commons/utils/index");

const insertImageS3 = async (event, context, callback) => {
  try {
    const url = event.message.url;
    const body = event.message.body;
    //Request
    const response = await insertImageS3Domain(url, body, callback);
    return send(200, response.httpRequest.path);
  } catch (error) {
    error.code = "aplication_error";
    return errorHandler(error, errorApi);
  }
};

const s3EventResponse = (event, context, callback) => {
  try {
    callback(null, "");
  } catch (error) {
    error.code = "calback_error";
    return errorHandler(error, errorApi);
  }
};

module.exports = {
  insertImageS3,
  s3EventResponse,
};
