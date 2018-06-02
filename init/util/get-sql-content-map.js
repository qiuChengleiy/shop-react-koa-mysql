const fs = require('fs');
const getSqlMap = require('./get-sql-map');

let sqlContentMap = {};

//解释sql脚本内容
function getSqlContent( fileName, path ) {
	let content = fs.readFileSync( path, 'binary' );
	sqlContentMap[ fileName ] = content;
};

//获取sql脚本并最终返回对象
function getSqlContenMap () {
	let sqlMap = getSqlMap();
	for( let key in sqlMap ) {
		getSqlContent( key, sqlMap[key] );
	}

	return sqlContentMap;
}

module.exports = getSqlContenMap;