import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css';
import {Button, Table} from 'ant-design-vue';

const app = createApp(App)
app.use(Button)
app.use(Table)
app.use(router).mount('#app')