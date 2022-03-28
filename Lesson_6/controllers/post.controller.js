const Post = require('../models/post.model');
const asyncHandle = require('../middlewares/asyncHandle');

const postController =  {
    getAllPost: asyncHandle(async (req, res, next) => {
        const posts = await Post.find();
        res.status(200).json({
            send: 'Get all post',
            data: posts
        });
    }),

    getPost: asyncHandle(async (req, res, next) => {
        let { id } = req.params;
        const post = await Post.findId(id);
        res.status(200).json({
            send: 'Get post by id',
            data: post
        });
    }),

    createPost: asyncHandle(async (req, res) => {
        const newPost = await Post.create(req.body);
        res.status(201).json({
            send: 'Create new post',
            data: newPost
        });
    }),

    updatePost: asyncHandle(async (req, res) => {
        let { id } = req.params;
        const user = await Post.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            message: "Update post",
            data: user
        })
    }),

    deletePost: asyncHandle(async (req, res) => {
        let { id } = req.params;
        await Post.findByIdAndDelete(id);
        res.status(200).json({
            message: "Successfully update",
        })
    })
}

module.exports = postController;