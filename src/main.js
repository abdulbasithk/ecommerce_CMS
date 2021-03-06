import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Toasted from 'vue-toasted'

Vue.config.productionTip = false

Vue.use(Toasted, {
  duration: 3000,
  position: 'top-right'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
