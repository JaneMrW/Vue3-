/*
 * @Author: your name
 * @Date: 2023-07-10 15:27:50
 * @LastEditTime: 2023-07-30 22:55:52
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blogSystem\src\router\index.js
 */
import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/login' //重定向到登录组件
        // name: 'home',
        // component: () => import('../views/Home/index.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login/index.vue'),
    }, 
    {
        path: '/card',
        name: 'Card',
        component: () => import('../views/card/index.vue'),
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home/index.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

export default router;