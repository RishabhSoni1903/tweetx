import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import { addPost, getFeed, getPosts } from '../controllers/posts.js';

const router = express.Router();

router.get("/", verifyToken, getPosts);
router.post("/", verifyToken, addPost);
router.get("/feed", verifyToken, getFeed);

export default router;