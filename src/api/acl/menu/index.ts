import request from '@/utils/request'
import type { PermissionResponseData, MenuParams } from './type'
//enumerate address
enum API {
  //get permission data from all menus and buttons
  ALLPERMISSTION_URL = '/admin/acl/permission',
  //add menu
  ADDMENU_URL = '/admin/acl/permission/save',
  //update existed menu
  UPDATE_URL = '/admin/acl/permission/update',
  //delete existed menu
  DELETEMENU_URL = '/admin/acl/permission/remove/',
}
//get data from menu
export const reqAllPermisstion = () =>
  request.get<any, PermissionResponseData>(API.ALLPERMISSTION_URL)
//add or update menu
export const reqAddOrUpdateMenu = (data: MenuParams) => {
  if (data.id) {
    return request.put<any, any>(API.UPDATE_URL, data)
  } else {
    return request.post<any, any>(API.ADDMENU_URL, data)
  }
}

//delete existed menu
export const reqRemoveMenu = (id: number) =>
  request.delete<any, any>(API.DELETEMENU_URL + id)
