import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import config from './config/index.js';
import api from './api/index.js';

const app = new Koa();
const router = new Router();
const {PORT} = config;

router.use('/api', api.routes());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Listening to Port : ${PORT}`);
});