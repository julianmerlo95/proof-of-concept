const Joi = require("@hapi/joi");

const schemaValidation = Joi.object({
  arrayImages: Joi.array().items({
    path: Joi.string().required(),
    size: Joi.number().required(),
    type: Joi.string().required(),
  }),
});

module.exports = {
  schemaValidation,
};



