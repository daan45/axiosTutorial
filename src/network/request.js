import axios from 'axios'

// 1.这是方法1
// export function request(config, success, failure) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   // 发送真正的网络请求
//   instance(config)
//     .then(res => {
//       // console.log(res)
//       success(res)
//     })
//     .catch(err => {
//       // console.log(err)
//       failure(err)
//     })
// }

// 2.另一种方式2
// export function request(config) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   // 发送真正的网络请求
//   instance(config.baseConfig)
//     .then(res => {
//       // console.log(res)
//       config.success(res)
//     })
//     .catch(err => {
//       // console.log(err)
//       config.failure(err)
//     })
// }


// 3.方法3--推荐用Promise方法  比较改
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 1.创建axios的实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })

//     // 发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//    })
// }

// 最终方案
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.axios的拦截器   请求拦截（请求成功、请求失败）   响应拦截（响应成功、响应失败）
  // 用axios是全局拦截  axios.interceptors
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    console.log(config)
    // 1.比如config中的一些信息不符合服务器的要求

    // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标

    // 3.某些网络请求(比如登录(token))，必须携带一些特殊的信息
    return config
  }, err => {
    console.log(err)
  })


  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    console.log(res)
    return res.data
    // 这里必须要把拦截到的数据进行return返回，不然发送请求页面获取不到数据，因为这里已经把数据拦截了。
  }, err => {
    console.log(err)
  })

  
  // 3.发送真正的网络请求
  return instance(config)
  // instance函数，这里返回本身就是返回一个promise 所以可以更精简
}


