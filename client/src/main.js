import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from "./router";

const axios_instance = axios.create();
axios_instance.interceptors.request.use(config => {
   config.headers = {
      // Basic認証対策
      'Authorization' :'Bearer hogehoge' 
   }
   return config
})

const app = createApp(App)
app.use(VueAxios, axios_instance)
app.use(router)
app.mount('#app')
