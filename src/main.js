import Vue from 'vue'
import App from './App.vue'
import router from './permission'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './style/index.less' // 引入初始化样式
import axios from 'axios'
import Component from './components/index'

Vue.config.productionTip = false
Vue.use(Component)
Vue.use(ElementUI) // 全局注册elementUI组件 任意位置都可以使用
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
