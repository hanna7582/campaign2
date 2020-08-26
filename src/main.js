import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ES6Promise from 'es6-promise'
import VueFlicking from "@egjs/vue-flicking"
import 'expose-loader?$!expose-loader?jQuery!jquery'
import "./common/mixin";
import VuePageTransition from 'vue-page-transition'

Vue.config.productionTip = false

ES6Promise.polyfill()

Vue.use(VueFlicking)
Vue.use(VuePageTransition)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
