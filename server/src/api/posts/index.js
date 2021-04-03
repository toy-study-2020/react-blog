import Router from 'koa-router';
import Joi from 'joi';
import Post from '../../modules/post.js';

const posts = new Router();

/**
 * post API
 * [GET] 게시글 전체 조회 : /api/posts/
 * [POST] 게시글 작성 : /api/posts/ : {title, body, user, date}
 * [GET] 특정 게시글 조회 : /api/posts/:id
 * [PATCH] 특정 게시글 수정 : /api/posts/:id
 * [DELETE] 특정 게시글 삭 : /api/posts/:id제
 * */

posts.get('/', ctx => {
  ctx.body = 'GET : posts success!';
});

posts.post('/', async ctx => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    body : Joi.string().required(),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const {title, body} = ctx.request.body;
  const post = new Post({title, body, user: ctx.state.user});
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
});

posts.get('/:id', ctx => {

});

posts.patch('/:id', ctx => {

});

posts.delete('/:id', ctx => {

});

export default posts;
