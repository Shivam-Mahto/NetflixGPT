import express from "express";
import getGPTSearch from "../controllers/gptController.js";
const router = express.Router();

router.post("/search", getGPTSearch);

export default router;
