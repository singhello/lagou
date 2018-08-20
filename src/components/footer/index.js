import React, { Component } from 'react';
import './index.css';
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';



class Footer extends Component {
  state = {
    title:"Footer"
  }
  render() {
    console.log(this.props,"footer")
    return (
      <div>
        { this.props.isShowHeader ? 
          <div className="footer">
            <NavLink to="/home">职位</NavLink>
            <NavLink to="/search">搜索</NavLink>
            <NavLink to="/users/mine">我的</NavLink>
          </div>
        : "" }
      </div>
    );
  }
}
function mapStateToProps(state){
  return {isShowHeader:state.isShowHeader1.isShowHeader};
}
export default connect(mapStateToProps)(Footer);

// export default Footer;