import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import VueCarousel from 'vue-carousel';
import wb from "./registerServiceWorker";

Vue.prototype.$workbox = wb;

Vue.use(PerfectScrollbar)
Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
