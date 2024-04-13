import express from "express";
import { createBlog, getBlog } from "../controllers/blogController.js";
const router = express.Router();

router.get("/", getBlog);

router.post("/", createBlog);

export default router;
