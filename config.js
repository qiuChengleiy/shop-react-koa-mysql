/*
* 配置文件
*/

const config = {
  // 测试端口 
  testPORT: 3001,
  
  //服务端口
  port: 3000,

  // 数据库配置
  database: {
    DATABASE: 'shopingNow',
    USERNAME: 'root',
    PASSWORD: 'root',
    PORT: '3306',
    HOST: '127.0.0.1'
  }
}

module.exports = config ;