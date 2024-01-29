import Post from '../models/Post.js';
import User from '../models/User.js';

export const addPost = async (req, res) => {
    try {
        const { content } = req.body;

        const user = await User.findById(req.user.id);
        const newPost = new Post({
            userId: req.user.id, userName: user.name, content
        });

        const savedPost = await newPost.save()
        res.status(201).json(savedPost);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getFeed = async (req, res) => {
    try {
        const id = req.user.id
        const user = await User.findById(id);
        let ids = user.following;
        let feedPosts = await Post.find({
            'userId': {
                $in: ids
            }
        }).sort({ createdAt: -1 });
        res.status(200).json(feedPosts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getPosts = async (req, res) => {
    try {
        const id = req.user.id;
        const posts = await Post.find({ userId: id });
        res.status(200).json(posts);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
