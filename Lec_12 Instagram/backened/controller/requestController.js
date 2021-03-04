const followerModel = require("../model/followerModel");
const followingModel = require("../model/followingModel");
const userModel = require("../model/userModel");

async function sendRequest(req, res) {
  try {
    console.log(req.body);
    let { uid, followId } = req.body;
    // isPublic
    let doc = await userModel.find({ _id: followId }).exec();
    console.log(doc);
    if (doc[0].isPublic) {
      // isPublic = true
      await followingModel.create({
        uid,
        followId,
      });
      await followerModel.create({
        uid: followId,
        followerId: uid,
      });
      res.json({
        message: "Request sent and accepted !!"
      })
    } else {
      // isPublic = false
      await followingModel.create({
        uid,
        followId,
        isAccepted: false
      });
      res.json({
        message: "Request sent and pending !!"
      })
    }
  } catch (error) {
    res.json({
      message: "Failed to send request !!",
      error
    })
  }
}
async function acceptRequest(req, res) {
  try {
    let { uid, toBeAccepted } = req.body;
    // change in following document
    let doc = await followingModel.find({ uid: toBeAccepted, followId: uid }).exec();
    console.log(doc);
    doc[0].isAccepted = true;
    await doc[0].save();
    await followerModel.create({
      uid,
      followerId: toBeAccepted,
    });
    res.json({
      message: "Request Accepted !"
    })
    // add in follower collection
  }
  catch (error) {
    res.json({
      message: "Failed to accept request !!",
      error
    })
  }
}

async function pendingRequest(req, res) {

  try {
    let { uid } = req.params;
    console.log(uid);
    let docs = await followingModel.find({ followId: uid, isAccepted: false }).exec();
    console.log(docs);
    let requests = [];
    for (let i = 0; i < docs.length; i++) {
      let uid = docs[i].uid;
      let users = await userModel.findById(uid);
      requests.push(users);
    }
    console.log(requests);
    res.json({
      message: "pending request got succefully 😍😍",
      requests
    })
  }
  catch (error) {
    res.json({
      message: "failed to get pending request!!",
      error
    })

  }
}
async function deleteRequest(req, res) { 
  try {
    
    let {toBeDeleted} = req.body;
    console.log(toBeDeleted);
    let doc  = await followingModel.remove({uid:toBeDeleted , isAccepted:false}).exec();
    console.log(doc)
    res.json({
      message: "deleted"
    })
  }
  catch (error){
    res.json({
      message: "failed to delete the request"

    })
}
}
async function deleteFollower(req, res) { 
  try {
     let {uid} = req.params.uid;
    let {toBeDeleted} = req.body;
    console.log(toBeDeleted);
    let doc  = await followerModel.deleteOne({uid: toBeDeleted  }).exec();
    console.log(doc);
    res.json({
      message: "Follower deleted"
    })
  }
  catch (error){
    res.json({
      message: "failed to delete the request"

    })
}
}

async function getAllFollowers(req, res) {
  try {
    let uid = req.params.uid;
    let followerIds = await followerModel.find({ uid: uid });
    // console.log(followerIds);
    if (followerIds.length) {
      let myFollowers = [];
      for (let i = 0; i < followerIds.length; i++) {
        let user = await userModel.findById(followerIds[i].followerId);
        myFollowers.push(user);
      }
      res.json({
        message: "Succesfully got all Followers",
        myFollowers,
      });
    } else {
      res.json({
        message: "You dont have any follower !",
      });
    }
  } catch (error) {
    res.json({
      message: "Failed to get all followers",
      error,
    });
  }
}
async function getAllFollowing(req , res){
  try{
    console.log(req.body)
    let {uid} = req.body ;
    let following = followingModel.findById({followId : uid});
    console.log(following);
  
    res.json({
      message: "finally got all following"
    })
  }
  catch(error){
      res.json({
        message : " failed to get all following"
      })
  }
}
async function getFollowingHelper(uid) {
  try {
    let following = await followingModel.find({ uid: uid, isAccepted: true }).exec();
    let myFollowing = [];
    for (let i = 0; i < following.length; i++) {
      let user = await userModel.findById(following[i].followId);
      myFollowing.push(user);
    }
    return myFollowing;
  } catch (error) {
    return error;
  }
}

async function getAllFollowing(req, res) {
  try {
    let uid = req.params.uid;
    let myFollowing = await getFollowingHelper(uid);
    if (myFollowing.length) {
      res.json({
        message: "Succesfully got all following !",
        myFollowing,
      });
    } else {
      res.json({
        message: "You dont have any following !",
      });
    }
  } catch (error) {
    res.json({
      message: "Failed to get all following",
      error,
    });
  }
}

async function getSuggestions(req, res) {
  try {
    let uid = req.params.uid;
    let myFollowing = await getFollowingHelper(uid);
    let checkList = myFollowing.map( function(user){
        return user["_id"]+"";
    });
    checkList.push(uid);
    console.log(checkList);
    let suggestions = [];
    for(let i=0 ; i<myFollowing.length ; i++){
        let followingOfMyFollowings = await getFollowingHelper(myFollowing[i]["_id"]);
        for(let j=0 ; j<followingOfMyFollowings.length ; j++){
            if(!checkList.includes(followingOfMyFollowings[j]["_id"])){
                suggestions.push(followingOfMyFollowings[j]);
                checkList.push(followingOfMyFollowings[j]["_id"]+"");
            }
        }
    }
    res.json({
        message:"Succesfully got all suggestions !",
        suggestions
    });
  } catch (error) {
    res.json({
      message: "Failed to get suggestions !",
      error,
    });
  }
}



module.exports.sendRequest = sendRequest;
module.exports.acceptRequest = acceptRequest;
module.exports.pendingRequest = pendingRequest;
module.exports.deleteRequest = deleteRequest;
module.exports.getAllFollowers = getAllFollowers;
module.exports.getAllFollowing = getAllFollowing;
module.exports.getSuggestions = getSuggestions;
module.exports.deleteFollower = deleteFollower;

