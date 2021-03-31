import Router from 'koa-router';

const auth = new Router();

/**
 * auth api documents
 * POST : login {Id,Password}
 * POST : register {Id,Password,PasswordConform,Name,Email,Gender}
 * */

auth.post('/login', ctx => {
  const {id, password} = ctx.request.body
  ctx.body = {id,password}
})

export default auth;