import Router from 'koa-router';

const auth = new Router();

auth.get('/', ctx => {
  ctx.body = 'GET : auth success!';
})

export default auth;