import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

import router from './router';
import store from './store';
//reset样式
import "../src/assets/css/reset.css"

const app = createApp(App);
// createApp(App).use(ElementPlus).mount('#app');
app.use(router);
app.use(ElementPlus);
app.use(store);
app.mount('#app');