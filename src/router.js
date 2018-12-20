import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Category from './views/Category.vue'
import Shopcar from './views/Shopcar.vue'
import Me from './views/Me.vue'

// 商品分类
import GoodsList from './views/GoodsList.vue'
// 商品详情
import GoodsInfo from './views/GoodsInfo.vue'

// 个人中心
import myorder from './components/me/myorder.vue'
import addressList from './components/me/addressList.vue'
import pwdReset from './components/me/pwdReset.vue'
import list from './components/me/list.vue'
import login from './components/me/login.vue'
import register from './components/me/register.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/home"
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: Shopcar
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
    },
    {
      path: '/goodsList/:id',
      name: 'goodsList',
      component: GoodsList,
    },
    {
      path: '/goodsInfo/:id',
      name: 'goodsInfo',
      component: GoodsInfo,
    },
    {
      path: '/me',
      component: Me,
      redirect:"/me/list",
      children:[
        {
          path: 'list',
          component: list
        },
        {
          path: 'login',
          component: login
        },
        {
          path: 'register',
          component: register
        },
        {
          path:'myorder',
          component:myorder
        },
        {
          path: 'addressList',
          component: addressList
        },
        {
          path: 'pwdReset',
          component: pwdReset
        }
      ]
    }
  ]
})
