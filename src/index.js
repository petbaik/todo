// import socketio from 'socket.io'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'
import store from './store/store'
import { ValidationProvider } from 'vee-validate';
import * as validation from './store/ui/validation'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCheck)
library.add(faTrashAlt)

Vue.component('icon', FontAwesomeIcon)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './styles/base.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate () {}
}).$mount('#app')
