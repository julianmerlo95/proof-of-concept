const commonErrorCatalog = require("./errors/commons.errors.json");

function isLocal() {
  return (
    (process.env.IS_LOCAL || process.env.IS_OFFLINE) && !process.env.GO_TO_AWS
  );
}

function send(statusCode, body) {
  try {
    const response = { statusCode };

    if (statusCode == "204") {
      return response;
    }

    if (!body) {
      throw new Error("internalErrorEmptyBodyInResponse");
    }
    response.body = JSON.stringify(body);
    return response;
  } catch (error) {
    if (error.message.includes("Unexpected token")) {
      error.message = "badInputInSendMethod";
    }
  }
}

function bodyParser({ body } = {}) {
  try {
    return JSON.parse(body);
  } catch (error) {
    error.code = "bad_request";
    throw error;
  }
}

function errorHandler(error, errorCatalog) {
  const errorResponse =
    errorCatalog[error.code] ||
    commonErrorCatalog[error.code] ||
    commonErrorCatalog["internal_server_error"];
  const { code, message, severity } = errorResponse;
  return send(errorResponse.status, { code, message, severity });
}

let arrayNewImages = [
  {
    name: "Image 400 x 300",
    width: "400px",
    height: "300px",
  },
  {
    name: "Image 160 x 120",
    width: "160px",
    height: "120px",
  },
  {
    name: "Image 120 x 120",
    width: "120px",
    height: "120px",
  },
];

module.exports = {
  isLocal,
  send,
  bodyParser,
  arrayNewImages,
  errorHandler,
};
