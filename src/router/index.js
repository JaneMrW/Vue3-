/*
 * @Author: your name
 * @Date: 2023-07-10 15:27:50
 * @LastEditTime: 2023-08-05 14:43:54
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
        name: 'login',
        path: "/",
        component: () => import("../views/login/index.vue")
    },
    {
        name: 'Home',
        path: '/home',
        component: () => import('../views/home/index.vue'),
        redirect: "/welcome",
        children: [{
                name: 'youAreWelcome',
                path: "/welcome",
                meta: {
                    title: "欢迎页",
                },
                component: () => import("../views/welcome/index.vue")
            },
            {
                name: 'card',
                path: "/card",
                component: () => import("../views/card/index.vue")
            },
            {
                name: 'GoodDetail',
                path: '/goodDetail',
                component: () => import('../views/goodDetail/index.vue'),
            },
            {
                name:'vueIntQuestions',
                path: '/vueIntQuestions',
                component: () => import('../views/vueIntQuestions/index.vue'),
            },
            {
                name:'vueApi',
                path: '/vueApi',
                component: () => import('../views/vueApi/index.vue'),
            }
        ]
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

export default router;