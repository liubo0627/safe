/**
 * Created by Administrator on 2017/7/1 0001.
 */
import React, { Component } from 'react';
import { Router, Route, Link} from 'react-router'
import swiper from "swiper"
import "../static/basic.css"
import "../static/swiper.css"

import axios from "axios"


import lunbo1 from "../img/home/lunbo1.jpg"
import lunbo2 from "../img/home/lunbo2.jpg"
import lunbo3 from "../img/home/lunbo3.jpg"
import lunbo4 from "../img/home/lunbo4.jpg"
import lunbo5 from "../img/home/lunbo5.jpg"
import lunbo6 from "../img/home/lunbo6.jpg"
import lunbo7 from "../img/home/lunbo7.jpg"
import lunbo8 from "../img/home/lunbo8.png"


import logo from "../img/home/logo.jpg"
import "../static/basic.css"

class Home extends Component {
    constructor(props){
        super(props)

    }
    componentDidMount(){

        var mySwiper = new swiper('.swiper-container',{

            autoplay: 2000,//可选选项，自动滑动
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
            pagination : '.swiper-pagination'
        })
        var that=this
        let api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
        axios.get(api).then(function(response){
            console.log(response.data.result[0].title);
            var val=response.data.result[0].title
            that.setState({
                list:response.data.result
            })
        }).catch(function(error){
            console.log(error);
        })

    }
    render() {
        return (
            <div className="wrap">
                <div className="banner">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src={lunbo1} alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src={lunbo2} alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src={lunbo3} alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src={lunbo4} alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src={lunbo5} alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src={lunbo6} alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src={lunbo7} alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src={lunbo8} alt=""/>
                            </div>
                        </div>
                        <div className="swiper-button-prev swiper-button-white"></div>
                        <div className="swiper-button-next swiper-button-white"></div>
                        <div className="swiper-pagination" id="active"></div>
                    </div>

                </div>
                <div className="notice_wrap">
                    <div className="notice">
                        <div className="notice_left">
                            <div className="news_title">
                                <span>安全公告</span>
                                <a href="javascript">more</a>
                            </div>
                            <div className="news_content">
                                <ul>
                                    {
                                        this.state.list.map(function(value,key){
                                        return <li key={key}>{value.title}</li>
                                    })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="notice_right"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home