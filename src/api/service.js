// api/login.js
import http from './http.js'

// 获取基础信息
export function getBaseInfo(params) {
  return http.get('/api/getBaseInfo', params)
}
// 新增模拟接口信息
export function addApiInfo(data) {
  return http.post('/api/addApiInfo', data)
}
// 修改模拟接口信息
export function updateApiInfo(data) {
  return http.post('/api/updateApiInfo', data)
}
// 修改模拟接口参数信息
export function updateApiParamInfo(data) {
  return http.post('/api/updateApiParamInfo', data)
}
// 删除模拟接口信息
export function deleteApiInfoById(params) {
  return http.get(`/api/deleteApiInfoById/${params.id}`)
}
// 删除模拟接口参数信息
export function deleteApiParamInfoById(params) {
  return http.get(`/api/deleteApiParamInfoById/${params.id}`)
}

// 获取模拟接口信息
export function getApiInfo(data) {
  return http.post('/api/getApiInfo', data)
}
// 获取模拟接口信息（分页查询）
export function getApiInfoByPage(data) {
  return http.post('/api/getApiInfoByPage', data)
}
// 获取模拟接口参数信息
export function getApiParamsInfo(data) {
  return http.post('/api/getApiParamsInfo', data)
}
