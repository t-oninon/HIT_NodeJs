const userRouter = require('./user.route');
const postRouter = require('./post.route');
const authRouter = require('./auth.route');
const textRouter = require('./text.route');

module.exports = (app) => {
    app.use('/api/users', userRouter);
    app.use('/api/posts', postRouter);
    app.use('/api/', authRouter);
    app.use('/api/text', textRouter);
}