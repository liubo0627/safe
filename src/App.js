import React, { Component } from 'react';
import { Link} from 'react-router'
import logo from "./img/home/logo.jpg"
import "./static/basic.css"
class App extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
        <div>
            <div className="App_wrap">
                <div className="App">
                    <div className="header_top">
                        <div className="logo">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="pic_right">
                            <span>提交漏洞</span>
                        </div>
                    </div>
                    <div className="header_nav"></div>
                </div>
                <div className="nav_wrap">
                    <div className="nav">
                        <ul>
                            <li><Link to="/home">首页</Link></li>
                            <li><Link to="/newsnotice">新闻公告</Link></li>
                            <li><Link to="/challenge">app挑战赛</Link></li>
                            <li><Link to="/productlist">产品列表</Link></li>
                            <li><Link to="/plan">守护计划</Link></li>
                            <li><Link to="/store">积分商城</Link></li>
                            <li><Link to="/thanks">致谢</Link></li>
                            <li><Link to="/award">奖励评估</Link></li>
                            <li><Link to="/lab">实验室</Link></li>
                        </ul>
                        <span className="login">登录</span>
                    </div>
                </div>

            </div>
            {this.props.children}
        </div>
    );
  }
}

export default App;
