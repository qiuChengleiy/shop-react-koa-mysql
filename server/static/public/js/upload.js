!function(){
//封装异步操作

/**
 * 类型判断
 * @type {Object}
 */
let UtilType = {
  isPrototype: function( data ) {
    return Object.prototype.toString.call(data).toLowerCase();
  },

  isJSON: function( data ) {
    return this.isPrototype( data ) === '[object object]';
  },

  isFunction: function( data ) {
    return this.isPrototype( data ) === '[object function]';
  }
}

/**
 * form表单上传请求事件
 * @param  {object} options 请求参数
 */
function requestEvent( options ) {
  try {
    let formData = options.formData
    let api = options.api
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
  //console.log(xhr.responseText)
      if ( xhr.readyState === 4 && xhr.status === 200 ) {
        options.success(JSON.parse(xhr.responseText))
      } 
    }
    xhr.upload.onprogress = function(evt) {
      let loaded = evt.loaded
      let tot = evt.total
      let per = Math.floor(100 * loaded / tot) 
      options.progress(per)
    }
    xhr.open('post', api )
    xhr.send(formData)
  } catch ( err ) {
    options.fail(err)
  }
}

/**
 * 上传事件
 * @param  {object} options 上传参数      
 */
function uploadEvent ( options ){
  let file
  let formData = new FormData()
  let input = document.createElement('input')
  input.setAttribute('type', 'file')
  input.setAttribute('name', 'files')

  input.click()
  input.onchange = function () {
    file = input.files[0]
    formData.append('files', file)
    requestEvent({
      formData,
      success: options.success,
      fail: options.fail,
      progress: options.progress,
      api: options.api
    })  
  }

}

/**
 * 上传操作
 * @param  {object} options 上传参数     
 */
function uploadAction( options ) {
  if ( !UtilType.isJSON( options ) ) {
    console.log( 'upload options is null' )
    return
  }
  let _options = {}
  _options.success = UtilType.isFunction(options.success) ? options.success : function() {}
  _options.fail = UtilType.isFunction(options.fail) ? options.fail : function() {}
  _options.progress = UtilType.isFunction(options.progress) ? options.progress : function() {}
  _options.api = options.api
  //console.log(options);
  uploadEvent(_options)
}

  let uploaded = {} ;
  uploaded.uploads = uploadAction ;
  window.uploaded = uploaded;

  return  uploaded;

}();







