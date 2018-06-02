/**
 * 时间：2018-04-23
 * store 入口文件
 * @  { Component }  > Apps  '注册store后的组件对象' ;
 * @  method > { mapStateToProps }  'props对象映射';
 * @  method > { mapDispatchToProps } 'actions 映射';
 * @  *.propTypes { }  > 'prop-types';
 * @  { Apps } '集合注入store组件对象';
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

//用户行为
import userAaction from './actions/user';

//导入页面主组件：
import Regsiter from '../../components/register';
import Nav from '../../components/nav';



function mapStateToProps(state) {
    return {
        value:state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logins:() => dispatch(userAaction.logi)
    }
}


//proptypes
Nav.propTypes = {
    logins:PropTypes.func.isRequired
}


//状态管理
import counter from './reducers/index';


//connected
const Regesiters = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Regsiter);

const LoginHead = connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);



  
//创建store
const store = createStore(counter);




// stroe 注入
//注册组件
const RegesiterDemo = ()=> (
    <Provider store = {store}>
    <Regesiters />
    </Provider>
);

//导航组件
const NavDemo = ()=> (
    <Provider store = {store}>
    <LoginHead />
    </Provider>
);





const Apps = {
    RegesiterDemo,
    NavDemo,
}

export default Apps;



