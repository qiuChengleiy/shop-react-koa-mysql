// API测试入口文件
const Koa = require('koa');
const app = new Koa();

//加载配置项
const config = require('../config');

const server = async ( ctx, next ) => {
  let result = {
    success: true,
    data: null
  };

  if ( ctx.method === 'GET' ) { 
    if ( ctx.url === '/getString.json' ) {
      result.data = 'this is string data'
    } else if ( ctx.url === '/getNumber.json' ) {
      result.data = 123456
    } else {
      result.success = false
    }
    ctx.body = result
    next && next()
  } else if ( ctx.method === 'POST' ) {
    if ( ctx.url === '/postData.json' ) {
      result.data = 'ok'
    } else {
      result.success = false
    }
    ctx.body = result
    next && next()
  } else {
    ctx.body = 'hello world'
    next && next()
  }
};

app.use(server);

module.exports = app;

app.listen(config.testPORT, () => {
  console.log('[demo] test-unit is starting at port 3000')
})