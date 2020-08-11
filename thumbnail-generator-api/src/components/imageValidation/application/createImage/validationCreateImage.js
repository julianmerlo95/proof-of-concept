const Joi = require("@hapi/joi");

const schemaValidation = Joi.object({
  id: Joi.string().required(),
  path: Joi.string().required(),
  name: Joi.string().required(),
  size: Joi.number().required(),
  type: Joi.string().required(),
});

module.exports = {
  schemaValidation,
};
