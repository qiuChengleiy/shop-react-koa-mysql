/**
 * 时间：2018-05-01
 * banner  展示区文件
 * @  { Component }  > Banner  'banner组件' ;
 * @  { Component }  > ShopList  '商品分类列表组件' ;
 * @  { Component }  > ShopListMore  '商品分类列表展开组件' ;
 * @  { Component }  > LunBo  '轮播图组件' ;
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import '../../../public/bootstrap/css/bootstrap.min.css';
import '../../../public/css/banner.less';
import { list } from '_postcss@6.0.21@postcss';

//'商品分类列表组件' 
class ShopLsit extends React.Component {
    constructor (...args) {
        super(...args);
    }
    
    /**
     * func  => 商品列表渲染函数
     * @params { Array } listName 商品分类参数 ;
     * @params { Array } link 商品分类链接参数 ;
     */
    forShopList( listName,link ) {
        return listName.map(( value,index ) => {
            return (
                <ul className='shop-classfic-list' key={ index } 
                onMouseOver={ () => this.props.func.call(this.props.root,index) }
                >
                  <li key={ index }><a href={ link[ index ] }> { value } </a></li>
                </ul>
            )
        }) 
  }

    render () {
      //定义列表数据
      const clothesArr = ["男装/ ","女装/ ","童装"];
      const shoesArr = ["男鞋/ ","女鞋/ ","户外"];
      const officeArr = ["电脑/ ","办公"];
      const furnitureArr = ["家具/ ","家居/ ","家装/ ","橱柜"];
      const digitalArr = ["数码/ ","手机/ ","运营商"];
      const link = ["/shop/clothes","/shop/shoes","/shop/office","/shop/furniture","/shop/digital"];
      //存取总分类
      const all = [ clothesArr,shoesArr,officeArr,furnitureArr,digitalArr ];

        return (
            <div>
                {
                    (() => {
                           return (
                                <div>   
                                   { this.forShopList( all,link ) }
                                </div>
                           )
                    })()
                }
            </div>

        )
    }
}

//展开列表组件
class ShopLsitMore extends React.Component {
    constructor(...args) {
        super(...args) ;
    }

    LsitDatas() { 
       return  ( data ) => {
           return data ;
       }
    }

    componentDidMount() {
       
    }

    render() {
        return (
            <div >{ this.props._data }</div>
        )
    }
}

//轮播图组件
class LunBo extends React.Component {
    constructor(...args) {
        super(...args);
    }
    /**
     * @ function ->  控制轮播导航处消失和出现;
     * @params { string } opacity  '透明度参数';
     */
    NavControll(opacity) {
        $('.navB').css({
            opacity:opacity
        });
        $('.navB').on('hover',function(event) {
            event.stopPropagation();
        })
    }

    render() {

       return (
         <div id="myCarousel" className="carousel slide"
           onMouseOver = { ()=> {this.NavControll.call(this,'1')} } 
             onMouseOut = { () => {this.NavControll.call(this,'0')} }
         >
            {/* <!-- 轮播（Carousel）指标 --> */}
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>  
            {/* <!-- 轮播（Carousel）项目 --> */}
            <div className="carousel-inner">
                <div className="item active">
                    <img src={require('../../../public/images/lunbo/b1.jpg')} alt="五一发放价" />
                </div>
                <div className="item">
                    <img src={require('../../../public/images/lunbo/b2.jpg')} alt="满199减100" />
                </div>
                <div className="item">
                    <img src={require('../../../public/images/lunbo/b3.jpg')} alt="鞋包告白日" />
                </div>
                <div className="item">
                    <img src={require('../../../public/images/lunbo/b4.jpg')} alt="大牌日" />
                </div>
            </div>

             {/* <!-- 轮播（Carousel）导航 --> */}
             <div className='navB'>
             <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
         </div>
       )
    }
}


//用户栏组件
class UserBar extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            userLogin: require('../../../public/images/no_login.jpg'),
        }
    }

    render() {

        return (
            <div className='banner-user'>

                <div className='banner-user-top'>
                    <div>
                        <img src={ this.state.userLogin } className='user-login-img' alt='用户头像' />
                    </div>
                    <div className='banner-user-login'>
                        <p>Hi~欢迎来到Forge!</p>
                        <span className='banner-user-login-btn'>
                            <a href='/login'>登录</a> &nbsp;
                            <a href='/register'>注册</a>
                        </span>
                    </div>
                </div>

                <div className='banner-user-bottom'>
                  <ul className='banner-broadcast-top'>
                      <li>促销 &nbsp;</li> |
                      <li> &nbsp; &nbsp;公告</li>
                      <li className='banner-right'>&nbsp; 更多</li>
                  </ul>
                  <div className='broad-line'></div>
                  <ul className='banner-broadcast-bottom'>
                        <li>搜狗录音翻译笔首发</li> 
                        <li>智能冰箱 下单最高省千元</li>
                        <li>5.15全球好物超级品类日</li> 
                        <li>玩具品类日，低至5折</li>
                  </ul>

                </div>

            </div>
        )
    }
}





//banner 根组件
class Banner extends React.Component {
    constructor(...args) {
        super (...args);
        this.state = {
            LsitDatas : 'no sever'
        }
    }

   /**
    * func   =>   数据索引，由相应列表产生相应的数据
    * @params { number } index  ‘列表索引’;
    * */    
    MoreLists( index ) {
        if( typeof index == "number") {
           switch ( index ) {
               case 0 :
                 this.setState({
                     LsitDatas: 'data: clothesArr DATA connecting...'
                 })
               break;

               case 1 :
               this.setState({
                LsitDatas: "data: shoesArr DATA connecting..."
               })
               break;

               case 2 :
               this.setState({
                LsitDatas: "data: officeArr DATA connecting..."
               })
               break;

               case 3 :
               this.setState({
                LsitDatas: "data: furnitureArr DATA connecting..."
               })
               break;

               case 4 :
               this.setState({
                LsitDatas: "data: digitalArr DATA connecting..."
               })
               break;

               default : index ;
               break; 
           }
        }
    }

    componentDidMount() {
     //..some ajax
    }

    render() {

        return (
            <div className='container container-responsive'>
                <div className='row'>
                    {/* 商品分类列表栏 */}
                    <div className='col-sm-2 hiddens'
                      //列表展开特效
                      onMouseOver={ () =>{ $(this.refs.shopList).css({opacity:'1',transform:'scaleX(1)'}) } }
                      onMouseOut={ () =>{ $(this.refs.shopList).css({opacity:'0',transform:'scaleX(0)'}) } }
                    >

                      <div className='banner-left-top'>

                         <div className='banner-img'>
                            <img src= { require('../../../public/images/logo.png') } alt='banner' />
                          </div>

                          <div className='banner-left-bottom'>
                             {/* 组件通信 , attribute:root 传入根组件对象，调用函数时改变this指向当前 */}
                             <ShopLsit func={ this.MoreLists } root = { this } />
                          </div>

                      </div>

                      {/* 商品分类展开 */}
                    <div className='banner-more' ref="shopList"> 
                      <ShopLsitMore _data={ this.state.LsitDatas } />
                    </div>

                    </div>

                    <div className='col-sm-8 banner_bo'>
                      <LunBo />
                     </div>

                     <div className='col-sm-2 hiddens'>
                      <UserBar />
                     </div>

                </div>
            </div>
        )
    }
}

export default Banner ;
