//define of data type
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}
//ts type
export interface Permission {
  id?: number
  createTime: string
  updateTime: string
  pid: number
  name: string
  code: null
  toCode: null
  type: number
  status: null
  level: number
  children?: PermissionList
  select: boolean
}
export type PermissionList = Permission[]
//return type of menu interface
export interface PermissionResponseData extends ResponseData {
  data: PermissionList
}

//ts type of menu data when refactor or add
export interface MenuParams {
  id?: number //ID
  code: string //authenticated code
  level: number //depth of menu
  name: string
  pid: number
}
