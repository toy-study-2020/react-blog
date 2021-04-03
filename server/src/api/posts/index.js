import Router from 'koa-router';

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

posts.post('/', ctx => {

});

posts.get('/:id', ctx => {

});

posts.patch('/:id', ctx => {

});

posts.delete('/:id', ctx => {

});

export default posts;
