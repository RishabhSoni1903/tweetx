import express from 'express';
import { follow, getAllUsers, getFollowers, getFollowing, getUser } from '../controllers/users.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/', verifyToken, getUser);
router.get('/getAll', verifyToken, getAllUsers);
router.get('/:id/followers', verifyToken, getFollowers);
router.get('/:id/following', verifyToken, getFollowing);

router.patch('/:userToFollowId', verifyToken, follow);

export default router;