// user api management
import request from '@/utils/request.ts'
import type {
  loginFormData,
  loginResponseData,
  userInfoReponseData,
} from '@/api/user/type.ts'

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}
//export interface functions
//login interface
export const reqLogin = (data: loginFormData) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)
//get user data
export const reqUserInfo = () =>
  request.get<any, userInfoReponseData>(API.USERINFO_URL)
//logout interface
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
