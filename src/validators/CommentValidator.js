const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      user_id: Joi.string(),
      comment: Joi.string(),
    }),
  }),

  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      comment_id: Joi.string().required(),
    }),
  }),

  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      comment_id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      user_id: Joi.string().optional(),
      comment: Joi.string().optional(),
    }),    
  }),
  
  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      comment: Joi.string().required(),
    }),
  }),
};