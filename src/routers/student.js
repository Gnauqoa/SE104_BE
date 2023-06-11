import upload from "../config/multer.js";
import express from "express";
import studentAccountAuth from "../middleware/studentAccountAuth.js";
import register from "../controller/student/register.js";
import login from "../controller/student/login.js";
import logout from "../controller/student/logout.js";
import getAccessToken from "../controller/student/getAccessToken.js";
import updateInfo from "../controller/student/updateInfo.js";
import registerContest from "../controller/student/registerContest.js";
import updateCCCDImage from "../controller/student/updateCCCDImage.js";

const studentAccountRouter = express.Router();
studentAccountRouter.post("/", register);
studentAccountRouter.post(
  "/current/register_contest",
  studentAccountAuth,
  registerContest
);
studentAccountRouter.put(
  "/current/update_cccd_image",
  studentAccountAuth,
  upload.array("cccd_image", 2),
  updateCCCDImage
);

studentAccountRouter.put("/current", studentAccountAuth, updateInfo);
studentAccountRouter.post("/login", login);
studentAccountRouter.delete("/current/logout", studentAccountAuth, logout);
studentAccountRouter.post("/refresh_token", getAccessToken);

export default studentAccountRouter;
