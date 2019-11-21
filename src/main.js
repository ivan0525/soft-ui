import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
import SoftUI from '../packages'

Vue.use(SoftUI)
// import sButton from '../packages/button'
// Vue.use(sButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
