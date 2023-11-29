import axios from 'axios'
import { ElMessage } from 'element-plus'
import useUserStore from '@/store/modules/user'
//create axios instances
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})
//request interceptors
request.interceptors.request.use((config) => {
  //get user info repository, bring token to server after successfully login
  const userStore = useUserStore()
  console.log(userStore.token)
  if (userStore.token) {
    config.headers.token = userStore.token
  }
  return config
})
//response interceptors
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    //handle network error
    let msg = ''
    const status = error.response.status
    switch (status) {
      case 401:
        msg = 'Invalid Token'
        break
      case 403:
        msg = 'Forbidden'
        break
      case 404:
        msg = 'Not Found'
        break
      case 500:
        msg = 'Server Error'
        break
      default:
        msg = 'Network Unavailable'
    }
    ElMessage({
      type: 'error',
      message: msg,
    })
    return Promise.reject(error)
  },
)
export default request
