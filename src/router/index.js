import Vue from 'vue'
import Router from 'vue-router'


/****************登录********************/
import NotFound from '../page/home/404.vue'
/****************登录********************/
import Login from '../page/home/login.vue'

import personage from '../page/established/personage.vue'
import myCenter from '../page/established/myCenter'
import schedule from '../page/established/schedule'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
    name: 'login',
    component: Login,
    hidden: true
     
    },
    {
      path: '/404',
      component: NotFound,
      name: '',
      hidden: true
    },

    {
      path: '/personage',
      name: 'personage',
      component: personage
    },
    {
      path: '/myCenter',
      name: 'myCenter',
      component: myCenter
    },
      {
      path: '/schedule',
      name: 'schedule',
      component: schedule
    }
  ]
  
})
