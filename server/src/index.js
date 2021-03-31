import Koa from 'koa';
import config from './config/index.js';

const app = new Koa();
const {PORT} = config;

app.listen(PORT, () => {
  console.log(`Listening to Port : ${PORT}`);
});