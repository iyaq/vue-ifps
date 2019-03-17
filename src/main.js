// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

import { Tabbar, TabbarItem } from 'vux'

Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
// // 导入 MUI 的样式
// import './lib/mui/css/mui.min.css'
// // 导入扩展图标样式
// import './lib/mui/css/icons-extra.css'
import './assets/css/base.css'
// import MintUI from 'mint-ui'
// Vue.use(MintUI)
// import 'mint-ui/lib/style.css'
import './api/index.js'
// 1.3 导入自己的 router.js 路由模块
// import router from './router.js'
// 导入 App 根组件
import app from './App.vue'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c => c(app),
  components: { App },
  template: '<App/>'
})
