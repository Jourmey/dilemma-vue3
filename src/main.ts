import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css';
import { Button, Table, Menu, Layout, Breadcrumb, Input, InputNumber ,Row ,Col} from 'ant-design-vue';

const app = createApp(App)
app.use(Button)
app.use(InputNumber)
app.use(Input)
app.use(Table)
app.use(Menu)
app.use(Layout)
app.use(Breadcrumb)
app.use(Row)
app.use(Col)
app.use(router).mount('#app')