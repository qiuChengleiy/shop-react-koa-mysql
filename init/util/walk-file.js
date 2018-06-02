const fs = require('fs');

//遍历目录下的文件
const walkFile = function ( pathResolve, mime ){
	let files = fs.readdirSync ( pathResolve );
	let fileList = {};

	for( let [ i, item] of files.entries() ) {
		let itemArr = item.split('\.')

	    let itemMime = ( itemArr.length > 1 ) ? itemArr[ itemArr.length - 1 ] : 'undefined'
	    let keyName = item + ''
	    if( mime === itemMime ) {
	      fileList[ item ] =  pathResolve + item
	   }
	 }
	 return fileList; 
};

module.exports = walkFile;