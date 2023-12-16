//ts type
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}
//user ts type
export interface User {
  id?: number
  createTime?: string
  updateTime?: string
  username?: string
  password?: string
  name?: string
  phone?: null
  roleName?: string
}
export type Records = User[]
//ts type of all users
export interface UserResponseData extends ResponseData {
  data: {
    records: Records
    total: number
    size: number
    current: number
    pages: number
  }
}

//ts type of role
export interface RoleData {
  id?: number
  createTime?: string
  updateTime?: string
  roleName: string
  remark: null
}
export type AllRole = RoleData[]
//ts type of all roles
export interface AllRoleResponseData extends ResponseData {
  data: {
    assignRoles: AllRole
    allRolesList: AllRole
  }
}

//ts type of distributed roles
export interface SetRoleData {
  roleIdList: number[]
  userId: number
}
