// 引入axios
import axios from 'axios'
import router from '../permission'
import {
  Message
} from 'element-ui';
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  // config 是axios的默认请求配置，和传入的配置 结合出来的
  // 必须将config return 不return 不行
  const token = window.localStorage.getItem('user-token')
  config.headers.Authorization = `Bearer ${token}`
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  // debugger
  return response.data ? response.data : {}
}, function (error) {
  // 处理异常数据
  const status = error.response.status
  let message = ''
  switch (status) {
    case 400:
      message = '请求参数错误'
      break;
    case 403:
      message = '用户非实名认证用户，无权限登录'
      break;
    case 507:
      message = '服务器或数据库异常'
      break;
    case 404:
      message = '手机号不正确'
      break;
    case 401:
      message = 'token过期或未传'
      window.localStorage.clear(); // 因为token过期，需清除缓存token
      router.push('/login') // 拿不到router，需将router引过来
      break
    default:
      message = '未知错误'
      break
  }
  Message({
    type: 'warning',
    message
  }) // 提示信息
  return new Promise(function () {}) // 直接返回一个Promise 表示错误已经被处理掉，相当于强行截止
})
export default axios
