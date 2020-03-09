import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import VueSmoothScroll from 'vue2-smooth-scroll'
import './assets/styles/index.css'

Vue.config.productionTip = false

Vue.use(VueSmoothScroll)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
