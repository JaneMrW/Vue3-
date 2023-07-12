/*
 * @Author: your name
 * @Date: 2023-07-10 15:27:50
 * @LastEditTime: 2023-07-11 21:14:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blogSystem\src\router\index.js
 */
import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

const routes = [{
        path: '/',
        name: 'home',
        component: () => import('../views/Home/index.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login/index.vue'),
    }, {
        path: '/floatW',
        name: 'FloatW',
        component: () => import('../views/floatW/floatW.vue'),
    },
    {
        path: '/bigB',
        name: 'BigB',
        component: () => import('../views/bigB/bigB.vue'),
    },
    {
        path: '/yaow',
        name: 'YaoW',
        component: () => import('../views/YaoW/YaoW.vue'),
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

export default router;