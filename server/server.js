import 'babel-polyfill';

import Koa from 'koa';
import Router from 'koa-router';
import BodyParser from 'koa-bodyparser';

const app = new Koa();
const router = Router();
//const send = require('koa-send');
const cors = require('koa-cors');

app
/**
  Middlewares
**/

  // CORS
  .use(cors())
  // Body parser
  .use(BodyParser())
  .use(async (ctx, next) => {
    ctx.state = {};
    ctx.state.query = ctx.request.query;
    ctx.state.body = ctx.request.body;
    await next();
  })
  // routes
  .use(router.routes())
  // Allowed methods
  .use(router.allowedMethods());

/**
  Routes
**/

router.get('/api/data', (ctx, next) => {
  ctx.body = { text: "Hire Me!",
               portfolioURL: 'www.dillonpmckee.com'
    };
});

//Attempt to serve static files with koa-send, resulted in html being read as JS.
//app.use(async (ctx) => { await send(ctx, '/index.html', { root: './' }); });

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
