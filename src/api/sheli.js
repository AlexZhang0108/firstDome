
import axios from './axios'
/* 新官网设立流程 */
//个人中心查询列表
export const person = params => axios.get('/establish/personalCenter/getCompanys', { params });
//保存用户信息
export const saveUserInfo = params => axios.postJson('/establish/personalCenter/saveUserInfo', params)
//新闻推荐列表
export const getNews = params => axios.get('/www/getNewsFromCms/getNews', params)
//随机公司名称列表
export const getRandomCompany = params => axios.get('/establish/personalCenter/getRandomCompany', { params } )

//设立流程数据请求
export const getEstablishProcess=params=>axios.get('/establish/process/getEstablishProcess',{params})


//驳回重新填写
export const getInfo = params => axios.get('/establish/personalCenter/getInfo', { params })
export const editSave = params => axios.postJson('/establish/personalCenter/editSave', params)


///establish/personalCenter/confirm
export const confirm = params => axios.get('/establish/personalCenter/confirm', { params })
