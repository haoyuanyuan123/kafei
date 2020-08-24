import Vue from 'vue'
import VueRouter from 'vue-router'


import prolist from '../views/proList'
import prodesc from '../views/prodesc'
import register from '../views/Register'
import menu1 from '../views/menu1'
import gwc from '../views/gwc'
import home from'../views/home'
import me from'../views/me'
import sgpo from'../views/sgpo'


// 引入消息中心(mess)
import Mess from '../views/Mess.vue';
// 引入个人资料(data)
import Data from '../views/Data.vue';
// 账户余额
import Account from '../views/Account.vue';
// 钱包
import Wallet from '../views/Wallet.vue';
// 优惠券
import Coupon from '../views/Coupon.vue';
// 礼品卡
import Gift from '../views/Gift.vue';
// 订单
import Order from '../views/Order.vue';
// 发票抬头
import Invoice from '../views/Invoice.vue';
// 收货地址
import Address from '../views/Address.vue';
// 添加地址
import Addss from '../views/Addss.vue';
Vue.use(VueRouter)

  const routes = [
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path:'/prolist',
    component:prolist
  },{
    path:'/prodesc',
    component:prodesc
  },{
    path:'/register',
    component:register
  },
  {
    path:'/sgpo',
    component:sgpo
  },
  ,{
    path:'/menu1',
    name:'menu1',
    component:menu1
  },
  {
    path:'/gwc',
    name:'gwc',
    component:gwc
  },
  {
    path:'/',
    name:'home',
    component:home
  },{
    path:'/me',
    name:'me',
    component:me
  },
  {
        path:'/mess',
        component:Mess
      },
      {
        path:'/data',
        component:Data
      },
      {
        path:'/account',
        component:Account
      },
      {
        path:'/wallet',
        component:Wallet
      },
      {
        path:"/coupon",
        component:Coupon
      },
      {
        path:'/gift',
        component:Gift
      },
      {
        path:'/order',
        component:Order
      },
      {
        path:'/invoice',
        component:Invoice
      },
      {
        path:'/address',
        component:Address
      },
      {
        path:"/addss",
        component:Addss
      }
]

const router = new VueRouter({
  routes
})

export default router
