import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import 'dayjs/locale/zh-cn'
import '@/mock/mockServer'
import api from "@/api";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(api);

app.mount('#app');
