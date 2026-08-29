import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadDir = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
// storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const newFileName = req.user._id + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

//  Correct file filter
const fileFilter = (req, file, cb) => {
  console.log("=== FILE DEBUG ===");
  console.log("fieldname:", file.fieldname);
  console.log("originalname:", file.originalname);
  console.log("mimetype:", file.mimetype);
  console.log("==================");
  const allowedExtensions = /\.(jpg|jpeg|png|gif|webp)$/i;
  const isValidExtension = allowedExtensions.test(file.originalname);
  const isValidMimetype = file.mimetype.startsWith("image/");

  // extension ya mimetype, dono mein se koi ek match kare to allow karo
  if (isValidExtension || isValidMimetype) {
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
