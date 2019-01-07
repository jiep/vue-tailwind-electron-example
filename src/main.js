import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faWindowMinimize, faWindowMaximize, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import './assets/styles.sass'
import router from './router'

library.add(faBars, faWindowMinimize, faWindowMaximize, faWindowClose)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
