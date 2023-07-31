/*
 * @Author: your name
 * @Date: 2023-07-10 15:27:50
 * @LastEditTime: 2023-07-31 17:11:54
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blogSystem\src\router\index.js
 */
import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

const routes = [{
        path: '/',
        redirect: '/login' //重定向到登录组件
    },
    {
        name: 'Login',
        path: '/login',
        component: () => import('../views/Login/index.vue'),
    },
    {
        name: 'Card',
        path: '/card',
        component: () => import('../views/card/index.vue'),
        children: [{
            path: 'b',
            component: () => import('../views/goodDetail/index.vue'),
        }]
    },
    {
        name: 'Home',
        path: '/home',
        component: () => import('../views/home/index.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

export default router;