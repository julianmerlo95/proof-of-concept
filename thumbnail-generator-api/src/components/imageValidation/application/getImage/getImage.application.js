const { getImageDomain } = require("../../domain/getImage/getImage.domain");
const { send } = require("../../../../commons/utils/index");

const getImage = async (event, context) => {
  try {
    const response = await getImageDomain(event.pathParameters.id);
    return send(200, response);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getImage,
};
