import React, { Component } from 'react';
import './index.css';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

class Login extends Component {
  state = {
    title:"Login",
    username:"",
    password:""
  }
  user(ev){
    let username = ev.target.value;
    this.setState({
      username
    })
  }
  pass(ev){
    let password = ev.target.value;
    this.setState({
      password
    })
  }
  componentDidMount(){
    this.props.dispatch({type:"HIDE",payload:{isShowHeader:false}});
  }
  componentWillUnmount(){
    this.props.dispatch({type:"SHOW",payload:{isShowHeader:true}});
  }
  render() {
    const {username,password} = this.state;
    return (
      <div id="login">
        <header className="form_header">
          <h2>登录拉勾</h2>
          <Link to="/users/reg" className="brother_link">注册</Link>
        </header>
        <p><input className="input_text" type="text" onChange={this.user.bind(this)} value={username} placeholder="请输入已验证的手机号或邮箱" /></p>
        <p><input className="input_text" type="text" onChange={this.pass.bind(this)} value={password} placeholder="请输入密码" /></p>
        <div className="input_label btn_group">
          <input type="button" className="submit_btn" value="登录" />
        </div>
        <footer className="form_footer">
          <span className="signin_type_btn">手机号登录</span>
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {isShowHeader:state.isShowHeader};
}
export default connect(mapStateToProps)(Login);
