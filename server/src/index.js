import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import config from './config/index.js';
import api from './api/index.js';
import jwtMiddleware from './lib/jwtMiddleware.js';

const app = new Koa();
const router = new Router();
const {PORT, MONGO_URI} = config;

mongoose
  .connect(MONGO_URI, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(e => {
    console.error(e);
  });


router.use('/api', api.routes());
app.use(bodyParser());
app.use(jwtMiddleware);
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Listening to Port : ${PORT}`);
});
