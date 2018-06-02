/*
 * 时间：2018-04-23
 * 前端路由控制文件
 * @  { Component }  > Apps  '注册store后的组件对象' ;
 * @  { Controller } '控制加载项组件';
 * @  { Root } '导出路由渲染好的根组件';
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';


import Apps from './store/store';

//调取组件
let Register = Apps.RegesiterDemo;
let Navigator = Apps.NavDemo;


//导入欢迎页
import Welcome from '../components/welcome';
//logo
import Logo from '../components/logo';
//navBar
import NavBar from '../components/navBar';
//banner
import Banner from '../components/banner';


//加载项控制 welcome?index
class Controller extends React.Component {
   constructor (...args) {
       super(...args);
       this.state = {
          isRemove:false
       }
   }

   componentDidMount() {
    this.updates.apply(this);  
   }
  //判断加载页的动画是否结束 
   updates() {
     setTimeout(() => {
      const node = ReactDOM.findDOMNode(this);
      var mounts = node.childNodes.length;
      if(mounts==1){
       this.setState((state) => {
            return {
              isRemove:true
            }
       }
     );
    }
   
     }, 7000);
   }

   render() { 
      return (
        <div>
          {
            this.state.isRemove?
              <Index />
            :<Welcome />   
          }
        </div>
      )
   }
}


/*
 * 时间：2018-04-23
 * 首屏欢迎页
 * @  { Index }  '首页' ;
 */


//首页框架搭建
class Index extends React.Component {
  render() {
      const { value, logins } = this.props;

      return (
          <div>
              {/* pc端 响应页面 */}
            <div className='pc'>
              <Navigator />
              <Logo />
              <NavBar />
              <Banner />
            </div>
            {/* 移动端响应页面 */}
            <div className='mobile'>
              <h1> hello  mobile </h1>
            </div>
       </div>
      )
  }
}


const Root = ({store}) => (
  <Provider store = {store}>
     <Router>
        <div> 
          <Route exact path='/' component={ Index } />
          <Route path='/register' component={ Register } />
        </div>
     </Router>
    </Provider>
);

export default Root;