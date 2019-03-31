import axios from 'axios'
import {message} from 'antd'

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? '' : '',
    timeout: 5000
})

let timer

instance.interceptors.request.use(
    config => {

    },
    error => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response => {
        if(parseInt(response.status) === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        if(error && error.response) {
            switch (error.response.status) {
                case 400:
                    message.error('错误请求')
                    break;
                case 404:
                    message.error('请求错误,未找到该资源')
                    break;
                case 500:
                    message.error('服务器出问题了，请稍后再试')
                    break;
                default:
                    message.error(`连接错误 ${error.response.status}`)
            }
            return Promise.reject(error.response)
        } else {
            return Promise.reject('服务器出了点小问题，请稍后再试')
        }
    }
)

export default instance
