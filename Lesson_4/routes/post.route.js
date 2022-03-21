const postController = require('../controllers/post.controller');
const router = require('express').Router();

router.route('/')
    .get(postController.getAllPost)
    .post(postController.createPost)

router.route('/:id')
    .get(postController.getPost)
    .put(postController.updatePost)
    .delete(postController.deletePost)

module.exports = router;
