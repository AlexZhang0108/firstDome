
const config = {}
let mockDataHandle = (api, path) =>{
	//  const dev = `http://rap.paat.com/mockjs/${path}`
	 const org = `http://establish.paat.org`
	// const org = `http://172.16.7.22:8850`
	// const prd = `http://cms.jieyuanbao.org`
	// const local = `	http://172.16.21.28:8839`
	// const dev =  `http://172.16.7.18:8839`
	for (let i = 0;i< api.length; i++){
		config[api[i]] = {
			target:org,
			changeOrigin: true,
			secure: false,
			pathRewrite: {
				[api[i]]: [api[i]]
			}
		}
	}
}
config['/common'] = {
	target:'`http://establish.paat.org',
	changeOrigin: true
}
config['/file'] = {
	target:'http://fileserver.jieshui8.org',
	changeOrigin: true
}


let apiLsf = [
	'/establish/personalCenter/getCompanys',	//个人中心查询列表
	'/establish/personalCenter/saveUserInfo', 	//保存用户信息
	'/www/getNewsFromCms/getNews',	//新闻推荐列表
	'/establish/personalCenter/getRandomCompany',	//随机公司名称列表
	'/establish/personalCenter/editSave'
]
mockDataHandle(apiLsf, 48)

let apiJhx = [
	'/establish/personalCenter/getInfo',
	'/establish/personalCenter/confirm'
]
mockDataHandle(apiJhx, 32)

//罗丹
let apiLd = [ 
	"/establish/process/getEstablishProcess" //设立流程列表
]
mockDataHandle(apiLd, 79)


let apiYzq = [
	'/establish/pcLogin/checkUser',
	'/establish/pcLogin/logout'
  ]
  mockDataHandle(apiYzq, 75)

module.exports = config
