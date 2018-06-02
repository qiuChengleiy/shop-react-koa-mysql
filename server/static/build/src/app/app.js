/**
 * 时间：2018-04-23
 * 项目入口文件
 * @  { style: public }  '公共样式库' ;
 * @  { App } '引入根组件';
 */

import React, { Component } from 'react';
import ReactDOM from "react-dom";

import "../../../public/css/public.css";


import App from './router';

ReactDOM.render(<App />, document.getElementById('app'));