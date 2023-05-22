// axios基础的封装
import axios from 'axios';

// 创建axios实例
const httpInstance = axios.create({
    // `baseURL`将被添加到`url`前面，除非`url`是绝对的。
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000,
});

// 拦截器：在请求或响应被 then 或 catch 处理前拦截它们。
// axios请求拦截器
httpInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (e) => Promise.reject(e)
);

// axios响应式拦截器
httpInstance.interceptors.response.use(
    (res) => res.data,
    (e) => {
        return Promise.reject(e);
    }
);

export default httpInstance;
