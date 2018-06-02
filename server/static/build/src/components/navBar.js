/**
 * 时间：2018-04-27
 * navBar  购物导航 文件
 * @  { Component }  > NavBar  'navBar组件' ;
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import '../../../public/bootstrap/css/bootstrap.min.css';
import '../../../public/css/navBar.less';

class NavBar extends React.Component {
    constructor(...args) {
        super (...args);
    }

    render() {
        return (
            <div className='container con-nav none container-responsive'>
                <div className='row'>
                    <div className='col-sm-4'>&nbsp;</div>
                    <div className='col-sm-2'>&nbsp;</div>
                    <div className='col-sm-6 nav-bar'>
                      <ul className='nav'>
                        <li>
                            <a href='/'>HOME</a>
                        </li>
                        <li>
                            <a href='/about'>ABOUT</a>
                        </li>
                        <li>
                            <a href='/shop'>SHOP</a>
                        </li>
                        <li>
                            <a href='/userInfo'>MY-ACCOUNT</a>
                        </li>
                        <li>
                            <a href='/contact'>CONTACT</a>
                        </li>
                      </ul>
                    </div>
                </div>

                {/* 图标区 */}
                <div className='row' style={{marginTop:'50px'}}>
                    <div className='col-sm-3'>
                        <div className='nav-order'>
                            <div className='nav-order-img'>
                                <img src={ require('../../../public/images/why-us/1.png') } alt='free shopping' />
                            </div>

                            <h5 className='nav-order-h5'>免费 购物</h5>
                            <p>Free for all prouct</p>

                     </div>
                    </div>

                    <div className='col-sm-3'>
                        <div className='nav-order'>
                                <div className='nav-order-img'>
                                    <img src={ require('../../../public/images/why-us/2.png') } alt='free shopping' />
                                </div>

                                <h5 className='nav-order-h5'>导购 咨询</h5>
                                <p>www.forge.com</p>

                         </div>
                    </div>

                    <div className='col-sm-3'>
                        <div className='nav-order'>
                                <div className='nav-order-img'>
                                    <img src={ require('../../../public/images/why-us/3.png') } alt='free shopping' />
                                </div>

                                <h5 className='nav-order-h5'>返利</h5>
                                <p>Money back guarantee</p>

                        </div>
                    </div>

                    <div className='col-sm-3'>
                        <div className='nav-order'>
                                <div className='nav-order-img'>
                                    <img src={ require('../../../public/images/why-us/4.png') } alt='free shopping' />
                                </div>

                                <h5 className='nav-order-h5'>免费 购物</h5>
                                <p>Free for all prouct</p>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default NavBar ;
