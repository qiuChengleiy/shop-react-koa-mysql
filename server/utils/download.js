//download 
var send = require('koa-send');

async function downloadFile ( fileName ,f) {

var filePath = 'static/upload-files/album/'
       
  await send(f, fileName, { root: __dirname + '/../static/upload-files/album' });

 }

 module.exports = {
 	downloadFile
 }
 