import Koa from 'koa';

const app = new Koa();
const PORT = 8787;

app.listen(PORT, () => {
  console.log(`Listening to Port : ${PORT}`)
})