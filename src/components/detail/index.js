import React, { Component } from 'react';
// import './index.css';
import {connect} from 'react-redux';


class Detail extends Component {
  state = {
    title:"Detail",
    id:""
  }
  componentWillMount(){
      console.log(this.props)
      this.setState({
          id:this.props.match.params.id
      })
      this.props.dispatch({type:"INFO",payload:{title:"职位详情"}})
  }
  componentWillUnmount(){
    this.props.dispatch({type:"EXINFO",payload:{title:"拉勾网"}})
  }
  render() {
    return (
      <div className="detail">
        {this.state.title}---商品id为{this.state.id}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {title:state.changeTitle.title}
}
export default connect(mapStateToProps)(Detail);
// export default Detail;
