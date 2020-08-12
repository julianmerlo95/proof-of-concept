const multer = require('multer');
const path = require('path')

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/hola");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({storage})

module.exports = {upload}