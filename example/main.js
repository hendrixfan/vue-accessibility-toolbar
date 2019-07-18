import Vue from 'vue'
import Toolbar from './Toolbar.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Toolbar),
}).$mount('#app')
