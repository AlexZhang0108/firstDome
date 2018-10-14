import axios from 'axios'
import {API_HOST} from './env'
import {headers,formData} from "./config";
import Qs from 'qs'

axios.defaults.baseURL = API_HOST
axios.defaults.headers = formData
axios.interceptors.request.use((request) => {
	// console.log(request);
	if (request.data && request.headers['Content-Type'] === formData['Content-Type']) request.data = Qs.stringify(request.data);
	return request;
});

axios.interceptors.response.use(response => {
	// console.log(response);
	let { data,status } = response;
	if(status === 200){
		if(data.state == 0){
			// if(data.msg)window.vm.$message.success(data.msg)
		}else{
			// if(data.msg)window.vm.$message.error(data.msg);
		}
		return data

	}else{
		// window.vm.$message.error('网络错误');
	}
}, error => {
	// console.log('error~~~~~~~~~~~~~~~~~~~~~~~~~')
	// console.log(error)
	// window.vm.$message.error('请求失败');
})

axios.postJson = (url,params={})=>axios.post(url,params,{headers})

export default axios