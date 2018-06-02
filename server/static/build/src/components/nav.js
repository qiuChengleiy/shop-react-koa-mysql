/*
 * 时间：2018-04-23
 * 首屏欢迎页
 * @  { Index }  '首页' ;
 */

import React, { Component } from 'react';
import ReactDOM from "react-dom";

import '../../../public/bootstrap/css/bootstrap.min.css';
import '../../../public/css/nav.less';



class Nav extends Component {
   constructor (...args) {
       super(...args);
       this.state = {
           _login: '未登录'
       }
   }

   /**
    *  fn -> toggle 导航下拉动画函数封装
    * @ulHead 下拉部分内容 ul标签以及子标签
    * @params { string } name 操作的对象参数
    * @params { string } opacity 透明度参数
    * @params { string } transform 缩放参数
    * description ： 通过操作DOM来触发CSS3的transition过渡效果
    * tips : '$'  => jquery对象 (如何全局使用，参考webpack配置) 
   */ 
   toggle (name,opacity,transform) {
       
       //缓存一些变量
       const hName = name;
       const ulHead = this.refs;
       const arrHead = [];
       const arrAlt = [];
       const mainName = {};
       
       //拿到目标属性 和 目标节点
       if( hName ) {
            for ( var key in ulHead ) {
               const ul_ = ulHead[key];
               const alt = ul_.attributes.alt.nodeValue;
               arrHead.push(key);
               arrAlt.push(alt); 
                if( hName == alt ) {
                    mainName.name = ul_ ;
                }
            }
            
            //操作当前传递节点
            for( var i =0; i<arrHead.length; i++ ) {
                if( hName == arrAlt[i] ) {
                    $( mainName.name ).css({
                        opacity:opacity,
                        transform: transform,
                    });
                }
            }
       }
      
   }

    render() {
        const { value, logins } = this.props;
        return (
            <div className='header-top'>
              <div className='container'>
                <div className='row'>

                    <div className='col-sm-5 hidden-xs'>
                        <div className='header-top-left'>
                            <ul className='left'
                            //方法调用
                            onMouseOver={ () => this.toggle.call(this,'user','1','scaleY(1)') }
                            onMouseOut={  () => this.toggle.call(this,'user','0','scaleY(0)')}
                            >
                                <li className='left-li'>
                                    <a className='left-li-a'>
                                        <span className='a-hover'>我的账号</span>
                                        <i className='fa fa-angle-down'></i>
                                    </a>
                                    {/* 下拉 */}
                                    <ul className='header-down' ref='user' alt='user'>
                                        <li>
                                            <a href='/login' className='a-hover fonts'>{this.state._login}</a>
                                        </li>
                                        <li>
                                            <a href="/userInfo" className='a-hover fonts'>账号信息</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className='left'
                             //方法调用
                             onMouseOver={ () => this.toggle.call(this,'doc','1','scaleY(1)') }
                             onMouseOut={  () => this.toggle.call(this,'doc','0','scaleY(0)')}
                            >
                                <li className='left-li'>
                                    <a className='left-li-a'>
                                        <span className='a-hover'>项目文档</span>
                                        <i className='fa fa-angle-down'></i>
                                    </a>

                                    {/* 下拉 */}
                                    <ul className='header-doc header-doc-p' ref='doc' alt='doc'>
                                        <li className='li-1'>
                                            <a href='/doc/downloads/readme.md' download='文档.md'>
                                              <i className='fa fa-usd'></i>
                                                <span className='a-hover'>下载</span>
                                            </a>

                                        </li>

                                        <li className='li-2'>
                                        <a href='/doc/readme'>
                                              <i className='fa fa-euro'></i>
                                                <span className='a-hover'>在线查看</span>
                                            </a>

                                        </li>
                                    </ul>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className='col-sm-3 col-xs-6 header-top-mid-w'>
                         <div className='header-top-mid'>

                            <ul className='left'
                             //方法调用
                             onMouseOver={ () => this.toggle.call(this,'login','1','scaleY(1)') }
                             onMouseOut={  () => this.toggle.call(this,'login','0','scaleY(0)')}
                            >
                                <li className='left-li'>
                                    <a className='left-li-a' href='/login'>
                                        <span  className='a-hover header-none'>Login or Register</span>
                                    </a>

                                    {/* 下拉*/}
                                    <div className='header-login header-login-p' ref='login' alt='login'>
                                     <div className='login-bg'>
                                       <h4>
                                           <strong>Login</strong>
                                       </h4>
                                       {/* 登录框  */}
                                       <input type='text' className='header-inpu header-user-inpu form-control' name='username' placeholder='username' />
                                       <input type='password' className='header-inpu header-pass-inpu form-control' name='password' placeholder='password' />
                                      </div>
                                      
                                     <div className='checks'>    
                                     <input type='checkbox' className='check-user' />                                                                                            
                                        <span className='check-span'>  记住密码 &nbsp;&nbsp;<a href='/regsiter'>立即注册</a></span> 
                                       <button type='submit' className='btn btn-info header-btn' onClick={logins}>登录</button>
                                     </div>
                                    </div>

                                </li>
                            </ul>

                         </div>
                    </div>

                    <div className='col-sm-4 col-xs-6'>
                         <div className='header-top-right header-none'>
                            {/* 搜索框 */}
                            <span className='search'>
                              <a>
                                  <img alt='搜索' src={require('../../../public/images/header/search-icon.png')} />
                              </a>
                            </span>

                            <span>
                                <input type='text' className='s-se' name='search' placeholder='Search...' />
                            </span> 

                         </div>
                    </div>
                </div>
              </div>
            </div>
        )
    }
}



export default Nav;
