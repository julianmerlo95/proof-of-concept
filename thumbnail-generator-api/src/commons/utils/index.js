const commonErrorCatalog = require("./errors/commons.errors.json");

function isLocal() {
  return (
    (process.env.IS_LOCAL ||
      process.env.IS_OFFLINE ||
      process.env.IS_SANDBOX) &&
    !process.env.GO_TO_AWS
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

let images = {
  image400: {
    width: "400",
    height: "300",
  },
  image160: {
    width: "160",
    height: "120",
  },
  image120: {
    width: "120",
    height: "120",
  },
};

module.exports = {
  isLocal,
  send,
  bodyParser,
  images,
  errorHandler,
};
