import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入vant UI
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)

import { Toast } from 'vant';
Vue.use(Toast);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
