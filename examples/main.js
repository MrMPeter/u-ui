import Vue from 'vue'
import App from './App.vue'
import UUI from '../packages'

Vue.config.productionTip = false
Vue.use(UUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
