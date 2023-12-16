import request from '@/utils/request'
import type { CategoryResponseData, AttrResponseData, Attr } from './type'
//attributes management
enum API {
  //category 1
  C1_URL = '/admin/product/getCategory1',
  //category 2
  C2_URL = '/admin/product/getCategory2/',
  //category 3
  C3_URL = '/admin/product/getCategory3/',
  //get all existed attributes
  ATTR_URL = '/admin/product/attrInfoList/',
  //add or update
  ADDORUPDATEATTR_URL = '/admin/product/saveAttrInfo',
  //delete attributes
  DELETEATTR_URL = '/admin/product/deleteAttr/',
}

export const reqC1 = () => request.get<any, CategoryResponseData>(API.C1_URL)
export const reqC2 = (category1Id: number | string) =>
  request.get<any, CategoryResponseData>(API.C2_URL + category1Id)
export const reqC3 = (category2Id: number | string) =>
  request.get<any, CategoryResponseData>(API.C3_URL + category2Id)
export const reqAttr = (
  category1Id: string | number,
  category2Id: string | number,
  category3Id: string | number,
) =>
  request.get<any, AttrResponseData>(
    API.ATTR_URL + `${category1Id}/${category2Id}/${category3Id}`,
  )

export const reqAddOrUpdateAttr = (data: Attr) =>
  request.post<any, any>(API.ADDORUPDATEATTR_URL, data)

export const reqRemoveAttr = (attrId: number) =>
  request.delete<any, any>(API.DELETEATTR_URL + attrId)
