import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'
import { store } from './store/index.js'
import vPlayBack from 'v-playback';
import VueFriendlyIframe from 'vue-friendly-iframe';

Vue.use(VueFriendlyIframe);
Vue.use(vPlayBack);

Vue.config.productionTip = false;

Vue.prototype.$logoFlag = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

