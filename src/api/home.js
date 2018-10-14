//home 接口
import axios from './axios'

//登录
export const login = params => axios.post('/establish/pcLogin/checkUser', params)
//退出
export const loginOut = params => axios.post('/establish/pcLogin/logout', params)

export const headers = {
	'Content-Type': 'application/json;charset=UTF-8'
}
export const formData = {
	'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
}

export const environment = {
	prd:"http://establish.paat.org"
}
