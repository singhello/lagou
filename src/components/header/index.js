import React, { Component } from 'react';

import {connect} from 'react-redux';
import './index.css';

class Header extends Component {
  state = {
    title:"拉勾网"
  }
  render() {
    console.log("呵呵",this.props)
    return (
      <div>
            {this.props.isShowHeader? <div id="header">
            {this.props.title}
            </div> : ""}
      </div>
    );
  }
}
function mapStateToProps(state){
  return {isShowHeader:state.isShowHeader1.isShowHeader,title:state.changeTitle.title};
}
export default connect(mapStateToProps)(Header);
