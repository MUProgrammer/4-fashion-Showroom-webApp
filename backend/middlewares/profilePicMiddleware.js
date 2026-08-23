import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads")); // correct path
  },
  filename: function (req, file, cb) {
    const newFileName = req.user._id + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

//  Correct file filter
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed"), false);
  }
};

// upload
const upload = multer({
  storage,
  fileFilter,
});

export default upload;
