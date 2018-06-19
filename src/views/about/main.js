import Vue from 'vue'
import About from './About.vue'
import './main.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(About)
}).$mount('#app')
