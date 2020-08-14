const {createImageDomain} = require("../../domain/createImage/createImage.domain");
const {bodyParser, send, errorHandler} = require("../../../../commons/utils/index");
const errorApi = require("../../../../commons/utils/errors/api.errors.json");
const {schemaValidation} = require("./validationCreateImage");
const Joi = require("@hapi/joi");

const createImage = async (event, context) => {
  try {
    const body = bodyParser(event);
    try {
      Joi.assert(body, schemaValidation);
    } catch (error) {
      return send(400, {
        code: "bad_resquest",
        message: "Request body validation failed",
        severity: "LOW",
      });
    }
    //Request
    const response = await createImageDomain(body);
    return send(200, response);
  } catch (error) {
    return errorHandler(error, errorApi);
  }
};

module.exports = {
  createImage,
};
