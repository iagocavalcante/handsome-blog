import Vue from 'vue'
import App from './App.vue'
import Plugin from './service/Plugin'
import router from './router'

Vue.config.productionTip = false

Vue.use(Plugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
