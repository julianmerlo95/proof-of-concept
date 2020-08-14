const Joi = require("@hapi/joi");

const schemaValidation = Joi.object({
  arrayImages: Joi.array().items({
    path: Joi.string().required(),
    size: Joi.number().required(),
    type: Joi.string().required(),
    userData: Joi.object({
      given_name: Joi.string().optional(),
      family_name: Joi.string().optional(),
      nickname: Joi.string().optional(),
      name: Joi.string().optional(),
      picture: Joi.string().optional(),
      locale: Joi.string().optional(),
      updated_at: Joi.string().optional(),
      email: Joi.string().optional(),
      email_verified: Joi.boolean().optional(),
      sub: Joi.string().optional(),
    }).optional()
  }),
});

module.exports = {
  schemaValidation,
};



