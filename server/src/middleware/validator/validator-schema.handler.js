const { badRequest } = require('@hapi/boom');

const validatorSchemaHandler = (schema, data) => {
  const { error, value } = schema.validate(data, { abortEarly: false });

  if (error) {
    throw badRequest(error);
  }

  return value;
};

module.exports = { validatorSchemaHandler };
