import Router from 'koa-router';

const auth = new Router();

/**
 * auth api documents
 * POST : login {Id,Password}
 * POST : register {Id,Password,PasswordConform,Name,Email,Gender}
 * */

auth.post('/login', ctx => {
  const {id, password} = ctx.request.body;
  ctx.body = {id, password};
});

auth.post('/register', ctx => {
  const {id, password, name, email, gender} = ctx.request.body;
  ctx.body = {id, password, name, email, gender};
});

export default auth;