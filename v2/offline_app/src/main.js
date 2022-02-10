import Vue from 'vue'
import App from './App.vue'
import './app.css';
import './assets/tailwind.css'
import './assets/fontawesome_5154'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


library.add(faCoffee)

Vue.use(BootstrapVue);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')

