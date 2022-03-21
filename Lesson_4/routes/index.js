const userRouter = require('./user.route');
const postRouter = require('./post.route');

module.exports = (app) => {
    app.use('/api/users', userRouter);
    app.use('/api/posts', postRouter);
}