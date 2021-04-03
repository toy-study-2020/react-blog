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
  const {id, password, name, email} = ctx.request.body;
  ctx.body = {id, password, name, email};
});

auth.get('/check', ctx => {
  // login check
});

auth.post('/logout', ctx => {
  // remove cookie (token)
});

export default auth;