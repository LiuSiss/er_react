import React from "react";
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import Login from '../component/Login.js';
import Regist from '../component/Regist.js';
import {showloginbox,showregistbox} from '../action/Action.js';

var Header = ({showLogin,showRegist,showloginbox,showregistbox,login,username}) => {

	//预备的东西，圆括号里面没有东西
	return (
		<div>
			<header className="header black-bg hd_style">


				<a href="/" className="logo"><b>个人二手闲置</b></a>

				<div className="top-menu">
					{
						(()=>{
							if(!login){
								return <ul className="nav pull-right top-menu">
					    					<li><a className="btn_login" href="javascript:;" onClick={()=>{showloginbox(true)}}>登录</a></li>
					    					<li><a className="btn_regist" href="javascript:;" onClick={()=>{showregistbox(true)}}>注册</a></li>
									</ul>
							}else{
								return <ul className="nav pull-right top-menu">
										<li className="dl_style">欢迎你~{username}</li>
	 								</ul>
							}
						})()
					}
				</div>
	        </header>

	        {showLogin ? <Login></Login> : null}
	        {showRegist ? <Regist></Regist> : null}
		</div>
	)
}

//加工CounterContainer
Header = connect(
	(state)=>{
		return {
			showLogin : state.indexReducer.showLogin,
			showRegist : state.indexReducer.showRegist,
			login : state.indexReducer.login,
			username : state.indexReducer.username
		}
	},{
		showloginbox,
		showregistbox
	}
)(Header);

export default Header;