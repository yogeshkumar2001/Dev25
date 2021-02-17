const { sendRequest , acceptRequest } = require("../controller/requestController");

const requestRouter = require("express").Router();

//localhost:3000/accept
requestRouter.route("").post(sendRequest);
requestRouter.route("/accept").post(acceptRequest);


module.exports = requestRouter;
