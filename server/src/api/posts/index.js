import Router from 'koa-router';

const posts = new Router();

posts.get('/', ctx => {
  ctx.body = 'GET : posts success!';
});

export default posts;