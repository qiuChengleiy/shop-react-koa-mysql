//引入模块
const mysql = require('mysql');

//加载配置项
const config = require('../../config');

//创建链接池
const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  port: config.database.PORT,
  database: config.database.PORT
});

//数据库操作接口封装
let query = function( sql, value ) {
	return new Promise(( resolve, reject ) => {
		pool.getConnection(function( err, connection ) {
			if( err ) {
				reject( err );
			} else {
				connection.query( sql, value, ( err, rows ) => {
					if ( err ) {
						reject( err );
					} else {
						resolve( rows );
					}
				});
			}
		})
	})
};

module.exports = {
	query
};