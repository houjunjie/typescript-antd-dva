// import { getLocalStorage } from '../utils/utils'
import config from '../utils/config'
import request from '../utils/request'
const { api } = config

const {
  index,
} = api

export function query (params: any) {
  return request({
    url: index,
    method: 'get',
    data: params,
  })
}