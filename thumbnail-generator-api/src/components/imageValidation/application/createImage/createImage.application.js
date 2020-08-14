const {createImageDomain} = require("../../domain/createImage/createImage.domain");
const {bodyParser, send, errorHandler} = require("../../../../commons/utils/index");
const errorApi = require("../../../../commons/utils/errors/api.errors.json");
const {schemaValidation} = require("./validationCreateImage");
const Joi = require("@hapi/joi");
const { logger } = require("../../../../commons/logger/index");


const createImage = async (event, context) => {
  try {
    const body = bodyParser(event);
    logger.info({body});
    try {
      Joi.assert(body, schemaValidation);
    } catch (error) {
      return send(400, {
        code: "bad_resquest",
        message: "Request body validation failed",
        severity: "LOW",
      });
    }
    const response = await createImageDomain(body);
    //Response
    return send(200, response);
  } catch (error) {
    logger.error({
      error,
      message: `createImage_application ${error.message}`,
    });
    return errorHandler(error, errorApi);
  }
};

module.exports = {
  createImage,
};
