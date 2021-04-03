import Router from 'koa-router';
import Joi from 'joi';
import User from '../../modules/auth.js';

const auth = new Router();

/**
 * auth api documents
 * POST : login {Id,Password}
 * POST : register {Id,Password,PasswordConform,Name,Email,Gender}
 * */

auth.post('/login', async ctx => {
  const {id, password} = ctx.request.body;
  ctx.body = {id, password};
});

auth.post('/register', async ctx => {
  const schema = Joi.object().keys({
    userId  : Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
    name    : Joi.string().required(),
    email   : Joi.string().required()
  });
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const {userId, password, name, email} = ctx.request.body;
  try {
    const exists = await User.findByUserId(userId);
    if (exists) {
      ctx.status = 409;
      return;
    }

    const user = new User({userId});
    await user.setPassword(password);
    await user.setOtherField({name, email});
    await user.save();

    ctx.body = user.serialize();
    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge  : 1000 * 60 * 60 * 24 * 7,
      httpOnly: true
    });
  } catch (e) {
    ctx.throw(500, e);
  }
});

auth.get('/check', async ctx => {
  // login check
});

auth.post('/logout', async ctx => {
  // remove cookie (token)
});

export default auth;