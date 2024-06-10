import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(path.basename("src"), "public", "images"));
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    },
});

const uploader = multer({ storage });
export default uploader;