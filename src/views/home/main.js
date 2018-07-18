import Vue from 'vue'
import Home from './Home.vue'

Vue.config.productionTip = false

console.log('API_URL', process.env.VUE_APP_API_URL)

new Vue({
  render: h => h(Home)
}).$mount('#app')
