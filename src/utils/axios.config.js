// 引入axios
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  // config 是axios的默认请求配置，和传入的配置 结合出来的
  // 必须将config return 不return 不行
  const token = window.localStorage.getItem('user-token')
  config.headers.Authorization = `Bearer  ${token}`
  return config
}, function (error
) {
  return Promise.reject(error)
})
export default axios
