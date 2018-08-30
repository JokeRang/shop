import Vue from 'vue'
//导入路由
import Router from 'vue-router'
//注册VueRouter
Vue.use(Router);
//导入单页面组件
import Index from '../components/index';
//导入详情页面
import Detail from '../components/detail'

import Cart from '../components/shoppingCart'

import Login from '../components/login'

import Order from '../components/order'

//定义路由规则
let routes = [{
        //首页
        path: '/',
        // component: Index,
        redirect: '/index'
    },
    {
        //首页
        path: '/index',
        component: Index
    },
    {
        //详情页
        path: '/detail/:id',
        component: Detail
    }, 
    {
        //购物车
        path: '/cart',
        component: Cart
    },
    {
        //登录
        path: '/login',
        component: Login
    },
    {
        //订单
        path: '/order',
        component: Order
    },
]
export default new Router({
    routes,
})