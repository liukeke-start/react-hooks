import axios from "axios";

export function getRequest(params) {
  //把所有的参数都放在啦params里面
  return axios.get('/api', {
    params: params
  })
}