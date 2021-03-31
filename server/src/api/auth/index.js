import Router from 'koa-router';

const auth = new Router();

/**
 * auth api documents
 * POST : login {Id,Password}
 * POST : register {Id,Password,PasswordConform,Name,Email,Gender}
 * */

auth.get('/', ctx => {
  ctx.status = 200;
  ctx.body = 'GET : auth success!!'
})

export default auth;