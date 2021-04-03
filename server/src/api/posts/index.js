import Router from 'koa-router';
import Joi from 'joi';
import Post from '../../modules/post.js';
import checkLoggedIn from '../../lib/checkLoggedIn.js';
import {getPostById, checkOwnPost} from '../../lib/postIdValidation.js';

const posts = new Router();

/**
 * post API
 * [GET] 게시글 전체 조회 : /api/posts/
 * [POST] 게시글 작성 : /api/posts/ : {title, body, user, date}
 * [GET] 특정 게시글 조회 : /api/posts/:id
 * [PATCH] 특정 게시글 수정 : /api/posts/:id
 * [DELETE] 특정 게시글 삭 : /api/posts/:id제
 * */

posts.get('/', async ctx => {
  const page = parseInt(ctx.query.page || '1', 10);
  if (page < 1) {
    ctx.status = 400;
    return;
  }

  const {userId} = ctx.query;
  const query = {
    ...(userId ? {'user.userId': userId} : {})
  };

  try {
    const posts = await Post.find(query).sort({_id: -1}).limit(10).skip((page - 1) * 10).exec();
    const postCount = await Post.countDocuments(query).exec();
    ctx.set('Last-Page', Math.ceil(postCount / 10));
    ctx.body = posts.map(post => post.toJSON()).map(post => ({
      ...post,
      body: post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`
    }));
  } catch (e) {
    ctx.throw(500, e);
  }
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

posts.get('/:id', getPostById, async ctx => {
  const {id} = ctx.params;
  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
});

posts.patch('/:id', getPostById, checkLoggedIn, checkOwnPost, async ctx => {
  const schema = Joi.object().keys({
    title: Joi.string(),
    body : Joi.string()
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  const {id} = ctx.params;
  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true,
    }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
});

posts.delete('/:id', getPostById, checkLoggedIn, checkOwnPost, async ctx => {
  const {id} = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
});

export default posts;
