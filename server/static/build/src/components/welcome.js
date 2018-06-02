/*
 * 时间：2018-04-23
 * 首屏欢迎页
 * @  { Welcome }  '欢迎页组件' ;
 */

import React from 'react';
import ReactDOM from 'react-dom';

import '../../../public/css/animate.css';
import '../../../public/css/welcome.less';

class Welcome extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            counts:6,
            isRemove:false
        }
    }
   //完成期
    componentDidMount() {
        //获取渲染好的节点
        var nodes = ReactDOM.findDOMNode(this);
        var timer,nums=0,timers,nul,canvas = document.getElementById('myCanvas');
         //canvas加载动画
        if(canvas.getContext) {
            var ctx = canvas.getContext('2d');
            var circle = {
                x:250,
                y:50,
                r:50

            };
            nums -=1; 
            timers = setInterval(() => {
                nums+=1;
                nul = parseFloat((nums/100).toFixed(2));
                //清除之前的痕迹
                ctx.clearRect(0,0,canvas.width,canvas.height);
                canvas.height = canvas.height;
                ctx.beginPath();
                ctx.strokeStyle = '#97FFFF';
                //画圆
                ctx.arc(circle.x,circle.y,circle.r,0,Math.PI*2*nul,false);
                ctx.stroke();   
                nums>=100?clearInterval(timers):1;  
                //只能通过这种方式，如果通过id来移除节点会报错
                nul>=1?nodes.parentNode.removeChild(nodes):1; 
            },80);
        }
       //倒计时状态更新
        timer=setInterval(() => {
            this.state.counts<=1?clearInterval(timer):1;
            this.setState((state) => {     
                return {
                    counts:state.counts-1
                }
            })
        },1000);
    }

    render() {
    
        return (
          <div>
            <div>
               <div className='logo'>
                 <div>
                    <img  className='we-img animated fadeInLeftBig' src={require('../../../public/images/header.jpg')}></img>
                    <div className='we-content animated fadeIn'>
                     <div>学习除了要更加<span style={{color:'#48D1CC'}}>努力</span>之外 &nbsp;&nbsp;更多的是<span style={{color:'#48D1CC'}}>分享</span></div>
                     </div>
                 </div>
                  <canvas id='myCanvas'>
                    您的浏览器不支持
                  </canvas>
                  <div className='we-count'>{this.state.counts}</div>
               </div>
            </div>
        </div>
        )
    }
}

export default Welcome;