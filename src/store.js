

//引入
import {createStore,combineReducers} from 'redux';

//初始化
 const initState = {
    isShowHeader:true,
    title:"拉勾网"
}
//创建reducer
const isShowHeader1 = (state = initState, action = {}) => {
    switch (action.type) {
        case 'SHOW':
            return {...state,isShowHeader:action.payload.isShowHeader};
        case "HIDE":
            return {...state,isShowHeader:action.payload.isShowHeader};
        default:
            return state
    }
}
const changeTitle = (state = initState, action = {}) => {
    switch (action.type) {
        case 'INFO':
            return {...state,title:action.payload.title};
        case "EXINFO":
            return {...state,title:action.payload.title};
        default:
            return state
    }
}
const reducer = combineReducers({
    isShowHeader1,
    changeTitle
})
//创建store
const store = createStore(reducer);
//监听状态
store.subscribe(()=>console.log(store.getState()));
//导出store
export default store;
