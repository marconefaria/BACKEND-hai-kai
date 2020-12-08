const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
          book_id: Joi.string().required(),
          comment_id: Joi.string().required(),
          category_id: Joi.string().required(),
          titulo: Joi.string().required(),
          autor: Joi.string().required(),
          resumo: Joi.string().required(),
          imagem: Joi.string().required(),
        }),
        [Segments.HEADERS]: Joi.object()
          .keys({
            authorization: Joi.string().required(),
          })
          .unknown(),
      }),
      
      getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
          book_id: Joi.string().required(),
        }),
        [Segments.QUERY]: Joi.object().keys({
          categoryName: Joi.string().optional(),
        }),
      }),
      update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
          book_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object()
          .keys({
            book_id: Joi.string().optional(),
            titulo: Joi.string().optional(),
            autor: Joi.string().optional(),
            resumo: Joi.string().optional(),
            imagem: Joi.string().optional(),
          })
          .min(1),
      }),
      delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
          book_id: Joi.string().required(),
        }),
      }),
}