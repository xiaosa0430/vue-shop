import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import axios from 'axios'
axios.defaults.baseURL = 'http://litc.pro:9999';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios;
// axios 拦截器
axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = token;
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
var shopcar = JSON.parse(localStorage.getItem('shopcar') || '[]')
export default new Vuex.Store({
  state: {
    shopcar: shopcar
    // shopcar:[]
  },
  getters:{
    getCount(state) {
      var c = 0;
      state.shopcar.forEach(item => {
        c += item.count
      })
      return c;
    },
  },
  mutations: {
    addToShopcar(state,goodsInfo){
      var flag = false;
      var totalCount = 0;
      state.shopcar.some(item => {
        if (item.id == goodsInfo.id) {
          item.count += parseInt(goodsInfo.count)
          totalCount = item.count;
          flag = true
          return true
        }
      })

      if (!flag) {
        state.shopcar.push(goodsInfo)
        totalCount = goodsInfo.count;
      }
      // 放入到本地
      localStorage.setItem('shopcar', JSON.stringify(state.shopcar))
      // 插入到数据库
      axios.post('/v1/cart/postGoodsToCart/' + goodsInfo.id, {count: totalCount})
      .then(res=>{
        console.log(res)
      })
    }
  },
  actions: {

  }
})
