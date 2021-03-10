const postRouter = require("express").Router();
const multer  = require("multer");
const path = require("path");
 const {createPost , getAllposts , getMyPosts} = require("../controller/postController")

 var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/posts')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname))
    }
  })
  const fileFilter = function(req, file, cb){
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'image/jpg'  ) {
        cb(null, true); // accept file is true passed 
    } else {
        cb(null, false); // reject fileb
    }
}
   
  var upload = multer({ storage: storage , fileFilter : fileFilter })


postRouter.route("").get(getAllposts).post(upload.single('post') , createPost);
postRouter.route("/:uid").get(getMyPosts);



module.exports = postRouter;