import Vue from 'vue'
import GeckWrecked from './GeckWrecked.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(GeckWrecked)
}).$mount('#geck-wrecked-app')
