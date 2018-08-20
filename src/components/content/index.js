import React, { Component } from 'react';
import {Route,Switch,withRouter} from "react-router-dom";
import {Home,Search,Mine,Detail,Login,Reg} from '../../components';


class Content extends Component {
  state = {
    title:"Content"
  }
  componentWillUpdate(){
    // console.log(111,this.props)
    if(this.props.match.params[0]){
      this.setState({
        title:"职位详情"
      })
    }
  }
  render() {
    return (
      <div className="content">
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/users/mine" component={Mine} />
            <Route path="/users/login" component={Login} />
            <Route path="/users/reg" component={Reg} />
            <Route exact path="/" component={Home} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/*" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Content);