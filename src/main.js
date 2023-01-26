import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/main.js'
// import axios from 'axios';

// Vue.use(axios);

Vue.config.productionTip = false;
// Vue.prototype.$axios = axios; 


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
