import React, { Component } from 'react';
import './index.css';
import {Link} from 'react-router-dom';

class Reg extends Component {
  state = {
    title:"Reg"
  }
  render() {
    return (
      <div id="reg">
        <header className="form_header">
          <h2>注册拉勾</h2>
          <Link to="/users/login" className="brother_link">登录</Link>
        </header>
        <p><span>0086</span>&ensp;&ensp;&ensp;<input className="input_text" type="text" placeholder="请输入常用手机号" /></p>
        <p><input className="input_text" type="text" placeholder="证明你是不是机器人" /><span className="random">{"random"}</span></p>
        <p><input v-model="yanzheng" className="input_text" type="text" placeholder="请输入收到的验证码" /><span>获取验证码</span></p>
        <div className="input_label btn_group">
          <input type="button" className="submit_btn" value="注册" />
        </div>
        <footer className="form_footer">
          <span className="signin_type_btn">手机号登录</span>
        </footer>
      </div>
    );
  }
}

export default Reg;
