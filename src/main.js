// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入ElementUI组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入初始css
import '@/css/app.css'


//引入axios组件
import axios from 'axios'
Vue.prototype.$host = process.env.API_HOST
Vue.config.productionTip = false


if(process.env.NODE_ENV ==='production'){
  const current_env = location.hostname.match("\\w+.\\w+.(\\w+)")[1].toUpperCase()
  if(current_env === "ORG"){
    axios.defaults.baseURL = process.env.API_HOST_ORG
  }
  if(current_env === "NET"){
    axios.defaults.baseURL = process.env.API_HOST_NET
  }
  if(current_env === "WORK"){
    axios.defaults.baseURL = process.env.API_HOST_WORK
  }
}

//全局挂载
Vue.use(ElementUI)
Vue.prototype.axios = axios;
/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  data: {
    Bus: new Vue()
  }
})

