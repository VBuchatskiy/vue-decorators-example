import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.config.performance = true

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
