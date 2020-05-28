import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'   // 引入Axios
import common from './common'   // 引入全局文件common.js

Vue.prototype.$axios = Axios;   // 全局变量
Vue.prototype.$common = common;    // 全局变量
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
