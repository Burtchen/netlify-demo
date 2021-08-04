// eslint-disable-next-line no-unused-vars
exports.handler = async function (event, context, callback) {
  try {
    var body = JSON.parse(event.body);
  } catch (e) {
    console.log(event);
    return {
      statusCode: 400,
      body: `[ERROR] Invalid JSON - ${e.message}`,
    };
  }

  const SCHEMA = {
    title: "person",
    type: "object",
    required: ["last name"],
    additionalProperties: true,
    properties: { "last name": { type: "string", maxLength: 50 } },
  };

  const Ajv = require("ajv");
  const ajv = new Ajv();

  const valid = ajv.validate(SCHEMA, body);

  if (!valid) {
    const errorMessage = "AJV validation failed";
    console.log(errorMessage);
    return {
      statusCode: 403,
      body: JSON.stringify(ajv.errors),
    };
  } else {
    return {
      statusCode: 200,
      body: JSON.stringify("Success"),
    };
  }
};
