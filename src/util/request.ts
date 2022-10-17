import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';
import router from '@/router';

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  method: 'post',
  params: {},
  timeout: 30000,
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
});

/**
 * 请求拦截器
 */
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!config.headers) {
      throw new Error(`Expected ['config', 'config.headers']`);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/**
 * 响应拦截器
 */
instance.interceptors.response.use(
  // 服务端响应格式为：
  /*
  {
	  "code": integer, // 响应代码。0 - 正确响应，非0，业务异常
	  "message": String, // 错误提示信息
	  "data": {} // 业务数据
  }
  */
  (response: AxiosResponse) => {
    console.log(response.config.url, response.status, response.data);
    const { code, message } = response.data;
    switch (code) {
      case 0: // 服务器正确响应
        return response.data;
      // case 99999: // 特定业务异常
      //   ElMessageBox.alert('服务器处理异常，请重试', '提示', {})
      //     .then((data) => {
      //       console.log(data);
      //     })
      //     .catch((data) => {
      //       console.log(data);
      //     });
      //   ElMessage({
      //     message: message || '系统异常',
      //     type: 'error',
      //   });
      //   break;
      default: // 未识别的业务异常
        ElMessage({
          message: message || '系统异常',
          type: 'error',
        });
        return Promise.reject(new Error(response.data));
    }
  },
  (error) => {
    const status = error.response.status;
    switch (status) {
      case 401:
        router.replace('/login');
        break;
      case 403:
        router.replace('/403');
        break;
      case 404:
        router.replace('/404');
        break;
      case 500:
        router.replace('/500');
        break;
      case 400:
      default:
        // 提示示例一：
        ElMessage({
          message: '系统异常，请重试',
          type: 'error',
        });

        // 提示示例二：
        // ElMessageBox.alert('404：页面不存在', '提示', {});
        return Promise.reject(error);
    }
  },
);

export default instance;
