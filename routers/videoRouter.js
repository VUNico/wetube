import express from "express";
import routes from "../routes";
import {
  deleteVideo,
  editVideo,
  videoDetail,
  getUpload,
  videoHome,
  postUpload,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.delete, deleteVideo);

export default videoRouter;
