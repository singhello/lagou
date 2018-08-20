import React, { Component } from 'react';
import "./index.css";
import axios from 'axios';
import {Link} from "react-router-dom";
import Cookies from 'js-cookie';
// import {connect} from 'react-redux';

// import {Home} from '../../components';


class Search extends Component {
  state = {
    city:"全国",//城市选择的状态
    arr:[],//职位列表
    historyArr:[],//历史搜索记录
    msg:"",//搜索内容
    pageNo:1,//查询第几页
    pageSize:15//每一页查询的数量
  }
  cityMark(){
    alert(1)
  }
  selectCity(){

  }
  show(ev){
    let msg = ev.target.value;
    this.setState({
      msg
    },()=>{
      //console.log(this.state.msg)
    })
    if(!ev.target.value){
      this.setState({
        arr:[]
      })
    }
  }
  getJobs(){
    //https://m.lagou.com/search.json?city=%E5%85%A8%E5%9B%BD&positionName=%E9%9D%92%E5%B2%9B&pageNo=1&pageSize=15
    let url = "/lagou/search.json";
    let params = {city:this.state.city,positionName:this.state.msg,pageNo:this.state.pageNo,pageSize:this.state.pageSize};
    axios.get(url,{params}).then(res=>{
      // if(!res.data.content.data.page.result)return;
      if(res.data.content){
        this.setState({
          arr:this.state.arr.concat(res.data.content.data.page.result)
        },()=>{
          // console.log(this.state.arr)
        })
      }else{
        // console.log("qqqqqqqqqq",res);
        alert(res.data.msg);
      }
      
    })
  }
  search(){
    if(this.state.arr.length === 0){
      this.getJobs();
    }
    //获取的cookie  [{%22id%22:1%2C%22content%22:%22%E9%9D%92%E5%B2%9B%E5%89%8D%E7%AB%AF%22}%2C{%22id%22:0%2C%22content%22:%22%E9%9D%92%E5%B2%9B%22}]
    if(Cookies.get("historyArr")){
      let cookieArr = JSON.parse(Cookies.get("historyArr"));
      let hassame = 0;
      cookieArr.forEach(item => {
         if(item === this.state.msg){
           hassame = 1;
        }
       // console.log(item.content,"-------------",this.state.msg)
      });
      //console.log(hassame)
      if(hassame === 0){//添加cookie
        cookieArr.unshift(this.state.msg);
        Cookies.set("historyArr",cookieArr,{expires:7,path:"/"});
      }
    }else{//设置cookie
       Cookies.set("historyArr",[this.state.msg],{expires:7,path:"/"});
    }
    //console.log(JSON.parse(Cookies.get("historyArr")) instanceof Array)
    // console.log( JSON.parse(Cookies.get("historyArr")));
    //将cookie里面的内容存入state状态中
    this.setHistory();
  }
  loadMore(){
    let pageNo = this.state.pageNo + 1;
    this.setState({
      pageNo
    },()=>{
      this.getJobs();
    })
  }
  delHistory(index){
    let historyArr = this.state.historyArr;
    historyArr.splice(index,1);
    //let cookieArr = JSON.parse(Cookies.get("historyArr"));
    Cookies.set("historyArr",historyArr,{expires:7,path:"/"});
    this.setState({
      historyArr
    })
  }
  setHistory(){
    //从cookie中获取历史搜索记录并添加到 historyArr 状态上
    //向历史搜索中添加一条数据
    if(Cookies.get("historyArr")){
      let historyArr = this.state.historyArr;
      let cookieArr = JSON.parse(Cookies.get("historyArr"));
      cookieArr.forEach((item,index)=>{
        historyArr[index] = item;
      })
      this.setState({
        historyArr
      })
       //console.log("historyArr : ",this.state.historyArr);
    }
  }
  componentDidMount(){
    this.setHistory();
  }
  render() {
    //console.log(this.state.historyArr)
    // console.log(this.props,1111111111111)
    return (
      <div className="searchBox">
        <div className="linputer">
            <div className="lbutton">
                <span onClick={this.cityMark.bind(this)} className="city">{this.state.city}</span>
                <span className="cityicon">^</span>
            </div>
            <div className="rinput">
                <input onChange={this.show.bind(this)} value={this.state.msg} className="inputer" type="text" placeholder="搜索职位或公司" />
                <span onClick={this.search.bind(this)} className="search">搜索<em className="searchicon"></em></span>
            </div>
        </div>
        {/* 循环arr职位列表 */}
        <ul className="list">
          {this.state.arr.map((item,index)=>{
            return (<li key={index} className="list-item" >
            <Link to={`/detail/${item.positionId}`} >
              <img className="item-logo" src={`https://www.lgstatic.com/${item.companyLogo}`} alt="" />
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
        {/* 判断是否搜索出来内容，如果搜索出来，就显示加载更多按钮 */}
        {this.state.arr.length > 0 ? <p onClick={this.loadMore.bind(this)} className="list-item more" >加载更多</p> : ""}
        {/* 判断是否有历史搜索记录可显示 */}
        {this.state.historyArr.length>0 && this.state.arr.length===0 ? (<ul>
            {this.state.historyArr.map((item,index)=><li className="historyList" key={index}><span className="text" >{item}</span><span className="delHistory" onClick={this.delHistory.bind(this,index)} >×</span></li>)}
          </ul>) : ""}

        {/* 城市选择 */}

      </div>
    );
  }
}

export default Search;
// function mapStateToProps(state){
//   return {hello:state.hello1.hello}//{hello:state.hello};
// }
// export default connect(mapStateToProps)(Search);