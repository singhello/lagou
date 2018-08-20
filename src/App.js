import React, { Component } from 'react';
import './App.css';
import {Content,Header,Footer} from './components';
// import { withRouter } from 'react-router-dom';
// import {connect} from 'react-redux';
// import store from './store';


class App extends Component {
  render() {
    // console.log(1212212,this.props)
    return (
        <div className="App">
          <Header/>
          <Content/>
          <Footer/> 
        </div>
    );
  }
}

// function mapStateToProps(state){
//   return state//{isShowHeader:state.isShowHeader};
// }
// export default connect(mapStateToProps)(App);
export default App;

