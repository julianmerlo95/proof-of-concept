const { createImage} 
    = require("./application/createImage/createImage.application");
const {insertImageS3, s3EventResponse} 
    = require("./application/insertImageS3/insertImageS3.application");

module.exports = {
  createImage,
  insertImageS3,
  s3EventResponse,
};
