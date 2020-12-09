const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string(),
    }),
  }),

  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      category_id: Joi.string().required(),
    }),
  }),

  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      category_id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().optional(),
    }),    
  }),
  
  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      category_id: Joi.string().required(),
    }),
  }),
};