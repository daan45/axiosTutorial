import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import axios from "axios"

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// // 1.基本使用
// // 默认请求是get
// // 因为axios支持promise,所以可以直接then拿结果
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   console.log(res)
// })

// // axios({
// //   url: 'http://123.207.32.32:8000/home/data?type=sell&page=1'
// // }).then(res => {
// //   console.log(res)
// // })
// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   // 专门针对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })




// // 2.axios发送并发请求
// // axios.all([axios({
// //   url: 'http://123.207.32.32:8000/home/multidata'
// // }), axios({
// //   url: 'http://123.207.32.32:8000/home/data',
// //   params: {
// //     type: 'sell',
// //     page: 5
// //   }
// // })]).then(res => {
// //   console.log(res)
// //   console.log(res[0])
// //   console.log(res[1])
// // })
// // 下面这个用spread 进行延展分割数组
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1)
//   console.log(res2)
// }))




// // 3.axios全局配置信息和对应的配置在进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

// axios.all([axios({
//   // baseURL: 'http://123.207.32.32:8000',
//   url: '/home/multidata'
// }), axios({
//   // baseURL: 'http://123.207.32.32:8000',
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1)
//   console.log(res2)
// }))





// // 4.创建对应的axios的实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })



// 5.封装request模块
import {request} from "./network/request"
// 1.request.js方法1接收
// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })



// 2.request.js方法2
// request({
//   baseConfig: {
//     // 这里传入基本配置
//   },
//   success: function (res) {
//     console.log(res)
//   },
//   failure: function (err) {
//     console.log(err)
//   }
// })

// 3.request.js方法3
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})