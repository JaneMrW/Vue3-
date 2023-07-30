/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-07-13 23:06:53
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-07-30 22:21:40
 * @FilePath: \blogSystem\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

import router from './router';
import store from './store';
//reset样式
import "../src/assets/css/reset.css"
//引入mock.js
import '../mock/mock.js'

import axios from 'axios';
const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(store);
app.mount('#app');
app.config.globalProperties.$axios=axios; 