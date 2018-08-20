import React, { Component } from 'react';
import {Link} from "react-router-dom";
// import {Home} from '../../components';
import './index.css'


class Mine extends Component {
  state = {
    title:"Mine"
  }
  render() {
    return (
      <div id="mine">
        <div className="top">
          <Link to="/users/login">登录/注册</Link>
        </div>
        <div className="middle">
          <Link className="fl a1" to="">投递</Link>
          <Link className="fr a1" to="">面试</Link>
        </div>
        <div className="bottom">
          <Link className="fl a1" to="">邀约</Link>
          <Link className="fr a1" to="">收藏</Link>
        </div>
      </div>
    );
  }
}

export default Mine;