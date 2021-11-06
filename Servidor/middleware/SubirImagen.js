const multer = require("multer");

const filtroImagen = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Por favor solo sube imagenes.", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/Imagenes/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
  },
});

var SubirImagen = multer({ storage: storage, fileFilter: filtroImagen });
module.exports = SubirImagen;