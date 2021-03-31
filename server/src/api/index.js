import Router from 'koa-router';
import auth from './auth/index.js';
import posts from './posts/index.js';

const api = new Router();

api.use('/auth', auth.routes());
api.use('/posts', posts.routes());

export default api;