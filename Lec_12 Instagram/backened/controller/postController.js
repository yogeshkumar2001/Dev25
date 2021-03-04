const  postModel = require("../model/postModel")

async function createPost(req, res ){
    try{
     let postObject = req.body;
     if (req.file) {
        let postPicPath =req.file.destination.substring(6) + "/" + req.file.filename;
        postObject.postImage = postPicPath;
      }
      let postCreated = await postModel.create(postObject);

      res.json({
          message : "post create SuccessFully!!!" ,
          postCreated
      })
    }
    catch(error){
        res.json({
            message : "failed to create post",
            error
        })
    }
}
async function getAllposts(req , res ){
  
    try{
        let posts = await postModel.find();
        res.json({
            message : "got all posts!!!",
            posts
        })
    }
    catch(error){
       res.json({
           message:"failed to get all posts!!",
       })
    }
} 

module.exports.createPost = createPost;
module.exports.getAllposts = getAllposts;