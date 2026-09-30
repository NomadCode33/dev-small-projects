const multer = require("multer");
const path = require("path");

module.exports = multer({
  // saves the file temporarily so cloudinary can grab it
  storage: multer.diskStorage({}),
  // only allows jpg, jpeg and png files
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});