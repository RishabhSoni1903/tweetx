import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
        maxLength: 200,
    }
}, { timestamps: true })

const Post = mongoose.model("Post", PostSchema);
export default Post;