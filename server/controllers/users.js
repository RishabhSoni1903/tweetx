import Post from "../models/Post.js";
import User from "../models/User.js";

export const getUser = async (req, res) => {
    try {
        const id = req.user.id;
        const user = await User.findById(id);
        const posts = await Post.find({ userId: req.user.id })
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({ _id: { $nin: req.user.id } });
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getFollowers = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        const ids = user.followers;
        let followers = await User.find({
            '_id': {
                $in: ids
            }
        })
        res.status(200).json(followers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getFollowing = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        const ids = user.following;
        let following = await User.find({
            '_id': {
                $in: ids
            }
        })
        res.status(200).json(following);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const follow = async (req, res) => {
    try {
        const id = req.user.id;
        const { userToFollowId } = req.params;
        const user = await User.findById(id);
        const userToFollow = await User.findById(userToFollowId);

        let userFollowingSet = new Set(user.following);
        let userToFolFollowers = new Set(userToFollow.followers)

        if (userFollowingSet.has(userToFollowId)) {
            userFollowingSet.delete(userToFollowId);
            userToFolFollowers.delete(id);
        } else {
            userFollowingSet.add(userToFollowId);
            userToFolFollowers.add(id);
        }

        user.following = Array.from(userFollowingSet);
        userToFollow.followers = Array.from(userToFolFollowers);

        await user.save();
        await userToFollow.save();

        const following = await Promise.all(
            user.following.map((id) => User.findById(id))
        )

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}