/**
 * 时间：2018-04-27
 * logo  展示区文件
 * @  { Component }  > Logo  'logo组件' ;
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import '../../../public/bootstrap/css/bootstrap.min.css';

class Logo extends React.Component {
    constructor(...args) {
        super (...args);
    }

    render() {
        //样式
        let styles = {
            display: 'block',
            margin: '50px auto',
        }

        return (
            <div className='container hiddens container-responsive'>
                <div className='row'>
                    <div className='col-sm-12'>
                       <a href='/'>
                        <img src={require('../../../public/images/logo.png')} alt='logo' style={ styles } />
                       </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Logo ;
