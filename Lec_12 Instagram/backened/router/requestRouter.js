const { sendRequest , acceptRequest , pendingRequest,
    deleteRequest ,getAllFollowers,getAllFollowing,
    getSuggestions, deleteFollower} = require("../controller/requestController");

const requestRouter = require("express").Router();

//localhost:3000/accept
requestRouter.route("").post(sendRequest);
requestRouter.route("/accept").post(acceptRequest);
requestRouter.route("/:uid").get(pendingRequest)
requestRouter.route("/delete/:uid").get(deleteRequest);
requestRouter.route("/followers/:uid").get(getAllFollowers);
requestRouter.route("/following/:uid").get(getAllFollowing);
requestRouter.route("/suggestions/:uid").get(getSuggestions);
requestRouter.route("/followerdelete/:uid").post(deleteFollower);

module.exports = requestRouter;
