//app.js
const Koa = require('koa');
const path = require('path');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');
const views = require('koa-views');
const send = require('koa-send');
const jsonp = require('koa-jsonp');
const convert = require('koa-convert');
const koaLogger = require('koa-logger');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const app = new Koa();

// 加载配置项 和 路由
const config = require('./../config');
const routers = require('./routers/index');


// session存储配置
const sessionMysqlConfig= {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST,
};

// 配置session中间件
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}));

// 配置控制台日志中间件
app.use(convert(koaLogger()));


// 配置ctx.body解析中间件
app.use(bodyParser());

// 配置静态资源加载中间件
app.use(convert(koaStatic(
  path.join(__dirname , './../static')
)));

// 配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}));

//jsonp
app.use(jsonp());

//view engine
app.use(views(path.join(__dirname,'./static/view'), {
	extension: 'ejs'
}));

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods());

// uploadFile. service 上传服务接口
const { uploadFile } = require('./util/upload');

//download service 下载服务接口
const { downloadFile }= require('./util/download');

//引入数据库入口文件 - mysql;
const mysql = require('../init/index')();

//对跨域的配置用通配符 * 可以实现 所有 跨域的请求
app.use(async (ctx, next) => {
 ctx.set('Access-Control-Allow-Origin', '*');
 ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
 ctx.set('Access-Control-Max-Age', 3600 * 24);
 ctx.set('Access-Control-Allow-Credentials', true);
 await next();
});



// 监听启动端口
app.listen(config.port, () => {
  console.log('[demo] route-use-middleware \n hello koa2 [demo] start-quick is starting at port 3000  O(∩_∩)O ');
});





