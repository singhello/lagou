import React, { Component } from 'react';
import './index.css';
import {Link} from "react-router-dom";
import axios from "axios";
class Home extends Component {
  state = {
    arr:[],
    pageNo:1,
    pageSize:15
  }
  getJobs(){
    //https://m.lagou.com/listmore.json?pageNo=2&pageSize=15
    let url = "/lagou/listmore.json";
    let params = {pageNo:this.state.pageNo,pageSize:this.state.pageSize}
    axios.get(url,{params}).then(res=>{
      //console.log(res.data.content.data.page.result)
      let arr = res.data.content.data.page.result;
      arr.forEach(item=>{
        if(/^https:\/\/www.lgstatic.com\//.test(item.companyLogo))return ;
        item.companyLogo = "https://www.lgstatic.com/" + item.companyLogo;
      })
      this.setState({
        arr:this.state.arr.concat(arr)
      })
      
      console.log(this.state.arr)
    }).catch(err=>{
      alert(err);
    })
  }
  loadMore(){
    let pageNo = this.state.pageNo + 1;
    this.setState({
      pageNo
    },()=>{
      this.getJobs();//通过修改状态的回调函数来请求后台，也就是修改成功以后再请求。
    })
    
  }
  componentWillMount(){
    this.getJobs()
    // console.log(111,this.state.arr)
  }
  render() {
    return (
      <div className="home">
        <div className="custom-info">
          <span className="info">10秒钟定制职位</span>
          <Link  to="/users/login" className="go"  >
              <em className="text">去登录</em>
          </Link>
        </div>

        {/* 循环arr职位列表 */}
        <ul className="list">
          {this.state.arr.map((item,index)=>{
            return (<li key={index} className="list-item" >
            <Link to={`/detail/${item.positionId}`} >
              <img className="item-logo" src={item.companyLogo} alt="" />
              <div className="item-desc">
                  <h2 className="item-title">{item.companyFullName}</h2>
                  <p className="item-info">
                      <span className="item-pos">
                          {item.positionName} [ {item.city} ]
                      </span>
                      <span className="item-salary">{item.salary}</span>
                  </p>
                  <p className="item-time">{item.createTime}</p>
              </div>
            </Link>
          </li>)
          })}
        </ul>
        <p onClick={this.loadMore.bind(this)} className="list-item more" >加载更多</p>
        <div id="copyright">
          <p>©2015 lagou.com, all right reserved </p>
          <div className="copyright-item">
            <span className="phone">移动版&nbsp;·&nbsp;</span>
            <span className="computer">电脑版&nbsp;·&nbsp;</span>
            <a href="#header">回顶部</a>
          </div>
        </div> 
        {/* <div className="custom-info">
          <span className="info">10秒钟定制职位</span>
          <Link  to="/users/mine" className="go"  >
              <em className="text">去登录</em>
          </Link>
        </div>
        <ul v-show="arr.length" className="list">
          <Link tag="li" to="/detail" className="list-item">
            <img className="item-logo" src="item.companyLogo" alt="" />
            <div className="item-desc">
                <h2 className="item-title">{11}</h2>
                <p className="item-info">
                    <span className="item-pos">
                        {11} [ {11} ]
                    </span>
                    <span className="item-salary">{11}</span>
                </p>
                <p className="item-time">{11}</p>
            </div>
          </Link>
          <li className="list-item more" >加载更多</li>
        </ul>
        <div id="copyright">
          <p>©2015 lagou.com, all right reserved </p>
          <div className="copyright-item">
            <span className="phone">移动版&nbsp;·&nbsp;</span>
            <span className="computer">电脑版&nbsp;·&nbsp;</span>
            <a href="#header">回顶部</a>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Home;
