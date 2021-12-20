import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载全局样式
import './assets/css/index.scss'

Vue.config.productionTip = false

// 创建vue 根实例，将router、store配置带根实例
// 把app 根组件渲染到#app节点
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
