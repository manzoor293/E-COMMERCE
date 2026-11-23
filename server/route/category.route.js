import { Router } from "express";
import auth from "../middleware/auth.js";
import upload from "../middleware/multer.js";
import { uploadImages } from "../controllers/category.controller.js";

const categoryRouter = Router();

categoryRouter.post(
  "/uploadImages",
  auth,
  upload.fields([{ name: "images", maxCount: 10 }]),
  uploadImages,
);

export default categoryRouter;
