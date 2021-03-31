import Koa from 'koa';
import Router from 'koa-router';
import config from './config/index.js';
import api from './api/index.js';

const app = new Koa();
const router = new Router();
const {PORT} = config;

router.use('/api', api.routes());

app.listen(PORT, () => {
  console.log(`Listening to Port : ${PORT}`);
});