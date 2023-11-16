//create user store
import { defineStore } from 'pinia'
//import interface
import { reqLogin, reqLogout } from '@/api/user'
import type { loginFormData, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
//import token management
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
//import route
import { constRoute, asnycRoute, anyRoute } from '@/router/routes'

// import cloneDeep from 'lodash/cloneDeep'
// import router from '@/router'
// //用于过滤当前用户需要展示的异步路由
// function filterAsyncRoute(asnycRoute: any, routes: any) {
//   return asnycRoute.filter((item: any) => {
//     if (routes.includes(item.name)) {
//       if (item.children && item.children.length > 0) {
//         //硅谷333账号:product\trademark\attr\sku
//         item.children = filterAsyncRoute(item.children, routes)
//       }
//       return true
//     }
//   })
// }

//create user store
const useUserStore = defineStore('User', {
  //store data
  state: (): UserState => {
    return {
      token: GET_TOKEN(), //unique token
      menuRoutes: constRoute, //store menu routes needs array
      username: '',
      avatar: '',
      //current user whether contains buttons
      buttons: [],
    }
  },
  //async logics
  actions: {
    //user login method
    async userLogin(data: loginFormData) {
      //login request
      const result: loginResponseData = await reqLogin(data)
      //login request: success 200 -> token
      //login request: fail 201 -> fail message
      if (result.code == 200) {
        //pinia store token
        //由于pinia|vuex存储数据其实利用js对象
        this.token = result.data as string
        //local storage
        SET_TOKEN(result.data as string)
        //return a success promise
        return 'ok'
      } else {
        //login failed. return error message
        return Promise.reject(new Error(result.data.message))
      }
    },
    //获取用户信息方法
    // async userInfo() {
    //   //获取用户信息进行存储仓库当中[用户头像、名字]
    //   const result: userInfoReponseData = await reqUserInfo()
    //   //如果获取用户信息成功，存储一下用户信息
    //   if (result.code == 200) {
    //     this.username = result.data.name
    //     this.avatar = result.data.avatar
    //     this.buttons = result.data.buttons
    //     //计算当前用户需要展示的异步路由
    //     const userAsyncRoute = filterAsyncRoute(
    //       cloneDeep(asnycRoute),
    //       result.data.routes,
    //     )
    //     //菜单需要的数据整理完毕
    //     this.menuRoutes = [...constantRoute, ...userAsyncRoute, anyRoute]
    //     //目前路由器管理的只有常量路由:用户计算完毕异步路由、任意路由动态追加
    //     ;[...userAsyncRoute, anyRoute].forEach((route: any) => {
    //       router.addRoute(route)
    //     })
    //     return 'ok'
    //   } else {
    //     return Promise.reject(new Error(result.message))
    //   }
    // },
    //退出登录
    // async userLogout() {
    //   //退出登录请求
    //   const result: any = await reqLogout()
    //   if (result.code == 200) {
    //     //目前没有mock接口:退出登录接口(通知服务器本地用户唯一标识失效)
    //     this.token = ''
    //     this.username = ''
    //     this.avatar = ''
    //     REMOVE_TOKEN()
    //     return 'ok'
    //   } else {
    //     return Promise.reject(new Error(result.message))
    //   }
    // },
  },
  getters: {},
})
export default useUserStore
