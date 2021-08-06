import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login'
import reg from '../views/reg'
import reg1 from '../views/reg1'
import reg2 from '../views/reg2'
import test from '../views/test'
import success from '../views/success'

Vue.use(Router);


export default new Router({


  routes: [{
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/reg1',
      name: 'reg1',
      component: reg1
    },
    {
      path: '/reg2',
      name: 'reg2',
      component: reg2
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/success',
      name: 'success',
      component: success
    },
  ]
})
